import React, { useState, useReducer } from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Anchor from '../anchor';
import Alert from '../alert'

function Contact() {
  const [email, changeEmail] = useState('')
  const [fullName, changeFullName] = useState('')
  const [message, changeMessage] = useState('')
  const [telefone, changeTelefone] = useState('')
  const [showAlert, changeShowAlert] = useState(false)

  const initialState = { alert: '', title: '', content: '' }
  const [state, dispatch] = useReducer(reducer, initialState)

  function handleCloseAlert() {
    changeShowAlert(false)
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'incomplete':
        changeShowAlert(true)
        return {
          alert: 'error',
          title: 'Campos vazios!',
          content: 'Por favor, preencha todos os campos.'
        }
      case 'error':
        changeShowAlert(true)
        return {
          alert: action.type,
          title: 'Falha ao enviar e-mail!',
          content: 'Por favor, tente novamente mais tarde.'
        }
      case 'invalid_email':
        changeShowAlert(true);
        return {
          alert: "error",
          title: "Email inválido!",
          content: "Por favor, insira um email válido."
        };
      case 'success':
        changeShowAlert(true)
        return {
          alert: action.type,
          title: 'Sucesso!',
          content: 'E-mail enviado corretamente, aguarde nosso retorno.'
        }
      default:
        return { initialState }
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    const testEmail = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
    if (email && !testEmail.test(email)) {
      dispatch({ type: 'invalid_email' });
    } else {
      if (email && fullName && message && telefone) {
        const data = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
          },
          mode: 'cors',
          body: JSON.stringify({
            email_address: email,
            status: 'subscribed',
            merge_fields: {
              FULLNAME: fullName,
              PHONE: telefone,
              MESSAGE: message
            },
            tag: 'Contact'
          })
        }

        fetch(`${process.env.GATSBY_API_CONTACT}`, data)
          .then(res => res.json())
          .then(res => {
            res.success ?
              dispatch({ type: 'success' }) : dispatch({ type: 'error' });
          })
          .catch(e => {
            dispatch({ type: 'error' })
          })
      } else {
        dispatch({ type: 'incomplete' })
      }
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(filter: { frontmatter: { title: { eq: "Contact" } } }) {
            edges {
              node {
                excerpt(pruneLength: 250)
                frontmatter {
                  title
                }
              }
            }
          },
          background_full: file(name: {eq:"background_full"}, sourceInstanceName: {eq: "images"}) {
            name
            publicURL
          },
        }
      `}
      render={data => (
        <section
          className="h-auto bg-cover"
          style={{ backgroundImage: `url(${data.background_full.publicURL})` }}
        >
          <div className="bg-cian-5 h-auto pt-30px lg:pt-40px pb-30px lg:pb-60px">
            <Anchor id="contato" />
            <div className="container mx-auto">
              <div className="sec-intro font-semibold">
                <h2>
                  <span className="text-black-3">Entre em contato </span>
                  <span className="text-white">conosco.</span>
                </h2>
              </div>
              <div className="mw424-mxa md:max-w-677 lg:max-w-817 pt-15px">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <p key={node.frontmatter.title} className="txtc-14-18 text-black-3 text-center mx-20px">
                    {node.excerpt}
                  </p>
                ))}
              </div>
              <div className="max-w-380 sm:max-w-424 md:max-w-677 lg:max-w-734 mxa-ha mt-25px md:mt-23px">
                <Alert
                  type={state.alert}
                  title={state.title}
                  content={state.content}
                  show={showAlert}
                  onClose={handleCloseAlert.bind(this)}
                />
                <form className="mx-20px lg:mx-0">
                  <div className="mb-20px">
                    <input
                      aria-label="Fullname"
                      className="no-outline input-contact h-52px"
                      type="text"
                      placeholder="Nome Completo"
                      required
                      value={fullName}
                      onChange={e => changeFullName(e.target.value)}
                    ></input>
                  </div>
                  <div className="mb-20px lg:h-52px">
                    <input
                      aria-label="E-mail"
                      className="no-outline input-contact lg:float-left lg:w-357px mb-20px lg:mb-0 h-52px lg:mr-10px"
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={e => changeEmail(e.target.value)}
                    ></input>
                    <input
                      aria-label="Phone"
                      className="no-outline input-contact lg:float-right lg:w-357px h-52px lg:ml-10px"
                      type="text"
                      placeholder="Telefone"
                      required
                      value={telefone}
                      onChange={e => changeTelefone(e.target.value)}
                    ></input>
                  </div>
                  <div className="w-full mb-15px">
                    <textarea
                      aria-label="Message"
                      className="no-outline input-contact h-154px min-h-52 max-h-180 py-16px"
                      type="text"
                      placeholder="Mensagem"
                      required
                      value={message}
                      onChange={e => changeMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <button
                    className="no-outline h-52px w-full md:w-245px bg-black-1 hover:bg-black-5 text-18 text-white font-semibold rounded"
                    type="submit"
                    onClick={e => handleSubmit(e)}
                  >
                    ENVIAR
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default Contact
