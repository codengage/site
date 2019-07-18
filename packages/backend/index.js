const { json, send } = require('micro');
const microCors = require('micro-cors');
const cors = microCors({ origin: ['http://localhost:8000'] })

const dotenv = require("dotenv");
const Mailchimp = require("mailchimp-api-v3");

dotenv.config();
let apiKey = process.env.MAILCHIMP_API
let listId = process.env.MAILCHIMP_LIST

const endPoint = async (req, res) => {
  let mailchimp = new Mailchimp(apiKey);
  
  const body = await json(req);

  let add_new_member = {
    method: 'POST',
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"

    },
    path: `/lists/${listId}/members`,
    body: body
  };

  try {
    const response = await mailchimp.request(add_new_member);

    console.log(response)

    send(res, 200, {teste:123})
  } catch(e) {
    console.log(e)
    console.log(e.message)

    send(res, 400, { erro: e.message })
  }
}

module.exports = cors(endPoint);
