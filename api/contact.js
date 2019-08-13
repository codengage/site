const { json, send } = require('micro');
const microCors = require('micro-cors');
const cors = microCors({ origin: ['*'] })
const md5 = require('md5')
const dotenv = require('dotenv')
const Mailchimp = require('mailchimp-api-v3')
const Mailgun = require('mailgun-js')

dotenv.config()

const apiKeyMailchimp = process.env.MAILCHIMP_API
const listId = process.env.MAILCHIMP_LIST

const apiKeyMailgun = process.env.MAILGUN_API
const domain = process.env.MAILGUN_DOMAIN

const mailChimp = new Mailchimp(apiKeyMailchimp)
const mailgun = new Mailgun({ apiKey: apiKeyMailgun, domain: domain });

const getByEmail = path =>
  mailChimp.request({
    method: 'get',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    path
  })

const createOrUpdate = (path, body = {}) =>
  mailChimp.request({
    method: 'put',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    path,
    body: {
      ...body,
      tags: []
    }
  })

const updateTags = (path, tags = []) =>
  mailChimp.request({
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    path: `${path}/tags`,
    body: {
      tags
    }
  })

const sendContact = (body = {}) =>
  new Promise((resolve, reject) => {
    mailgun.messages().send({
      from: `Contato Codengage <${body.email_address}>`,
      to: 'contato@codengage.com',
      subject: `Contato de ${body.merge_fields.FULLNAME}`,
      html: `<p>Nome: ${body.merge_fields.FULLNAME};</p><p>Mensagem: ${body.merge_fields.MESSAGE};</p><p>Email: ${body.email_address};</p><p>Telefone: ${body.merge_fields.PHONE}.</p>`,
      text: `Nome: ${body.merge_fields.FULLNAME}; Mensagem: ${body.merge_fields.MESSAGE}; Email: ${body.email_address}; Telefone: ${body.merge_fields.PHONE}.`
    }, (error, body) => {
      if (error) {
        reject(error)
      }
      resolve(200)
    });
  })

module.exports = cors(async (req, res) => {
  //verifica se request é OPTIONS
  if (req.method.toUpperCase() === "OPTIONS") {
      send(res, 200, {success: true})
    }
  // extrai tag do body
  const { tag, ...body } = await json(req)
    
  // path para o mailchimp
  const path = `/lists/${listId}/members/${md5(body.email_address)}`

  // tag default enviada pelo front
  const tags = [
    {
      name: tag,
      status: 'active'
    }
  ]

  try {
    // verifica se o email já exists
    const exists = await getByEmail(path)

    // se já existir adiciona a tag relacionada a ele a lista de tags
    if (exists && exists.tags) {
      exists.tags.forEach(({ name }) => {
        if (name !== tag) {
          tags.push({
            name: name,
            status: 'active'
          })
        }
      })
    }
  } catch (e) { }

  try {
    //envia email de contato pelo mailgun
    if (tag.toUpperCase() === "CONTACT") {
      await sendContact(body)
    }

    // registra ou atualiza o contato
    await createOrUpdate(path, body)

    // atualiza as tags do contato
    await updateTags(path, tags)

    // retorna sucesso
    send(res, 200, {success: true})
  } catch (e) {
    // retorna erro
    send(res, 400, {erro: e.message})
  }
})
