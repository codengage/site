import React, { useState, useReducer } from "react";
import { graphql, StaticQuery } from "gatsby";

import Alert from '../alert';

function SecContact() {
  const [email, changeEmail] = useState("");
  const [fullName, changeFullName] = useState("");
  const [message, changeMessage] = useState("");
  const [telefone, changeTelefone] = useState("");
  const [showAlert, changeShowAlert] = useState(false);

  const initialState = { alert: '', title: '', content: '' };
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleCloseAlert() {
    changeShowAlert(false);
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'incomplete':
        changeShowAlert(true);
        return { 
          alert: "error", 
          title: "Campos vazios!",
          content: "Por favor, preencha todos os campos." 
        };
      case 'error':
        changeShowAlert(true);
        return { 
          alert: action.type, 
          title: "Falha ao enviar e-mail!",
          content: "Por favor, tente novamente mais tarde." 
        };
      case 'success':
        changeShowAlert(true);
        return { 
          alert: action.type, 
          title: "Sucesso!", 
          content: "E-mail enviado corretamente, aguarde nosso retorno." };
      default:
        return { initialState };
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email && fullName && message && telefone) {
      const data = {
        method: 'POST',
        headers: {
          "Accept": "application/json"
        },
        mode: 'cors',
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FULLNAME: fullName,
            PHONE: telefone,
            MESSAGE: message
          },
          tags: [
            { "name": "Contact", "status": "active" }
          ],
        }),
      }

      fetch('http://localhost:3000', data)
        .then(res => res.json())
        .then(res => {
          res.erro ?
            dispatch({ type: 'error' }) :
            dispatch({ type: 'success' });
        })
        .catch(e => {
          dispatch({ type: 'error' });
          console.log('e', e)
        })
    } else {
      dispatch({ type: 'incomplete' });
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(filter: { frontmatter: { title: { eq: "Contact" } }}) {
            edges {
              node {
                excerpt(pruneLength: 250)
                frontmatter {
                  title
                }   
              }
            }
          }
        }
      `}
      render={data => (
        <section id="contato" className="h-auto bg-cover" style={{ backgroundImage: 'url(/images/background_full.svg)' }}>
          <div className="bg-cian-1 opacity-98 h-auto pt-30px lg:pt-40px pb-30px lg:pb-60px">
            <div className="container mx-auto">
              <div className="text-center font-semibold text-34 md:text-48-97 lg:text-58 leading-none lg:leading-normal">
                <span className="text-black-3">Entre em contato </span>
                <span className="text-white">conosco.</span>
              </div>
              <div className="max-w-424 md:max-w-677 lg:max-w-817 mx-auto pt-15px">
                {
                  data.allMarkdownRemark.edges.map(({ node }) =>
                    <p key={node.frontmatter.title} className="font-display text-14 md:text-18 text-black-3 text-center leading-snug mx-20px">
                      {node.excerpt}
                    </p>
                  )
                }
              </div>
              <div className="max-w-380 sm:max-w-424 md:max-w-677 lg:max-w-734 h-auto mx-auto mt-25px md:mt-23px">
                
                <Alert type={state.alert} title={state.title} content={state.content} show={showAlert} onClose={handleCloseAlert.bind(this)} />
               
                <form
                  className="mx-20px lg:mx-0">
                  <div className="mb-20px">
                    <input className="w-full h-52px px-16px bg-white opacity-100 font-display text-black-1 border border-black-8 rounded leading-tight" type="text" placeholder="Nome Completo" required value={fullName} onChange={e => changeFullName(e.target.value)}></input>
                  </div>
                  <div className="mb-20px lg:h-52px">
                    <input className="lg:float-left w-full lg:w-357px mb-20px lg:mb-0 h-52px lg:mr-10px px-16px bg-white opacity-100 font-display text-black-1 border border-black-8 rounded leading-tight" type="email" placeholder="Email" required value={email} onChange={e => changeEmail(e.target.value)}></input>
                    <input className="lg:float-right w-full lg:w-357px h-52px lg:ml-10px px-16px bg-white opacity-100 font-display text-black-1 border border-black-8 rounded leading-tight" type="text" placeholder="Telefone" required value={telefone} onChange={e => changeTelefone(e.target.value)}></input>
                  </div>
                  <div className="w-full mb-15px">
                    <textarea className="w-full h-153-81px max-h-180 px-16px py-16px bg-white opacity-100 font-display text-black-1 border border-black-8 rounded leading-tight" type="text" placeholder="Mensagem" required value={message} onChange={e => changeMessage(e.target.value)}></textarea>
                  </div>
                  <button className="h-52px w-full md:w-245px bg-black-1 hover:bg-black-5 text-18 text-white font-semibold rounded" type="submit" onClick={e => handleSubmit(e)}>
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

export default SecContact;