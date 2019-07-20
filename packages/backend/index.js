const { json, send } = require('micro');
const md5 = require('md5');
const microCors = require('micro-cors');
const cors = microCors({ origin: ['http://localhost:8000'] })

const dotenv = require("dotenv");
const Mailchimp = require("mailchimp-api-v3");

dotenv.config();
let apiKey = process.env.MAILCHIMP_API
let listId = process.env.MAILCHIMP_LIST

const mailchimp = async (req, res) => {
  let mc = new Mailchimp(apiKey);
  
  const body = await json(req);
  let path = `/lists/${listId}/members/${md5(body.email_address)}`;
  const originalTags = body.tags;

  let get_user = {
    method: 'get',
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    path: path,
  };

  let manage_tags = {
    method: 'post',
    headers: {
      "Content-type": "application/json",
    },
    path: `${path}/tags`,
    body: { "tags": originalTags }
  }

  let create_or_update = {
    method: 'put',
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    path: path,
    body: body
  };


  const manageTags = async (request) => {
    try {
      const mTags = await mc.request(request);
      console.log(mTags)
  
    } catch(e) {
      console.log(e)
      console.log(e.message)
    }
  }
  
  const registerOnMailchimp = async (request) => {
    try {
      body.tags = [];
      const response = await mc.request(request);
      console.log(response)
      manageTags(manage_tags)

      send(res, 200, {teste:123})
    } catch(e) {
      console.log(e.message)
  
      send(res, 400, { erro: e.message })
    }
  }

  try {
    const exist = await mc.request(get_user);

    if (exist.tags) {
      exist.tags.map(({ name }) => {
        if (name !== body.tags[0]) {
          body.tags.push({
            "name": name, "status": "active"
          })
          try {
            manageTags(manage_tags);
          } catch (e) {
            console.log(e.message)
          }
        }
      })
    }
    registerOnMailchimp(create_or_update);
  } catch(e) {
    registerOnMailchimp(create_or_update);
  }
}

module.exports = cors(mailchimp);
