const md5 = require('md5')
const dotenv = require('dotenv')
const Mailchimp = require('mailchimp-api-v3')

dotenv.config()

const apiKey = process.env.MAILCHIMP_API
const listId = process.env.MAILCHIMP_LIST

const mailChimp = new Mailchimp(apiKey)

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

export default async (req, res) => {
  // extrai tag do body
  const { tag, ...body } = req.body

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
  } catch (e) {}

  try {
    // registra ou atualiza o contato
    await createOrUpdate(path, body)

    // atualiza as tags do contato
    await updateTags(path, tags)

    // retorna sucesso
    res.status(200).json({
      success: true
    })
  } catch (e) {
    // retorna erro
    res.status(400).json({
      erro: e.message
    })
  }
}
