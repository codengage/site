module.exports = (req, res) => {

  let Mailchimp = require("mailchimp-api-v3");

  // let apiKey = process.env.REACT_APP_MAILCHIMP_API
  // let listId = process.env.REACT_APP_MAILCHIMP_LIST

  let mailchimp = new Mailchimp('b4c62e7c25ac61fe48ff60e4b0dc3f7e-us3');
  console.log('postMessage', req)

  let callback = function (err, result) {
    if (err) {
      console.log('err:', err)
      return err
    }
    console.log('results', result)
    process.exit(0);
    return 200;
  }

  let add_new_member = {
    method: 'post',
    headers: {
      "Content-type": "application/json",
    },
    path: `/lists/e6b15f892e/members`,
    body: req.body
  }
  mailchimp.request(add_new_member, callback)

  res.end('Welcome to Micro')
}

// let Mailchimp = require("mailchimp-api-v3");

// let apiKey = process.env.REACT_APP_MAILCHIMP_API
// let listId = process.env.REACT_APP_MAILCHIMP_LIST

// let mailchimp = new Mailchimp(apiKey);

// function postMessage(body) {
//   console.log('postMessage', body)

//   let callback = function (err, result) {
//     if (err) {
//       console.log('err:', err)
//       return err
//     }
//     console.log('results', result)
//     process.exit(0);
//     return 200;
//   }

//   let add_new_member = {
//     method: 'post',
//     headers: {
//       "Content-type": "application/json",
//     },
//     path: `/lists/${listId}/members`,
//     body: body
//   }
//   mailchimp.request(add_new_member, callback)
// }

// export default postMessage;