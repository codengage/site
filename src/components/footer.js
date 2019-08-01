import React, { useState, useReducer } from 'react';

import { graphql, StaticQuery } from "gatsby";
import { Link } from 'gatsby';

import SocialIcons from './socialIcons';
import Alert from './alert'

function Footer() {
  const [email, changeEmail] = useState('')
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
          content: 'Por favor, informe um email.'
        }
      case 'error':
        changeShowAlert(true)
        return {
          alert: action.type,
          title: 'Falha ao registrar e-mail!',
          content: 'Por favor, tente novamente mais tarde.'
        }
      case 'success':
        changeShowAlert(true)
        return {
          alert: action.type,
          title: 'Sucesso!',
          content: 'Obrigado por assinar nossa Newsletter.'
        }
      default:
        return { initialState }
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (email) {
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
          tag: 'Newsletter'
        })
      }

      fetch(process.env.GATSBY_API_CONTACT, data)
        .then(res => res.json())
        .then(res => {
          res.success ?
            dispatch({ type: 'success' }) :
            dispatch({ type: 'error' });

        })
        .catch(e => {
          dispatch({ type: 'error' });
        })
    } else {
      dispatch({ type: 'incomplete' })
    }
  }

  return (
    <StaticQuery
      query={graphql`
        {
          mimi: file(name: {eq:"mimi"}, sourceInstanceName: {eq: "images"}) {
            name
            publicURL
          },
          icon_play_cian: file(name: {eq:"icon-play-cian"}, sourceInstanceName: {eq: "icons"}) {
            name
            publicURL
          },
          instagram: file(name: {eq:"instagram-brands-white"}, sourceInstanceName: {eq: "icons"}) {
            name
            publicURL
          },
          facebook: file(name: {eq:"facebook-square-brands-white"}, sourceInstanceName: {eq: "icons"}) {
            name
            publicURL
          },
          linkedin: file(name: {eq:"linkedin-brands-white"}, sourceInstanceName: {eq: "icons"}) {
            name
            publicURL
          },
          copyright_regular: file(name: {eq:"copyright-regular"}, sourceInstanceName: {eq: "icons"}) {
            name
            publicURL
          },
        }
      `}
      render={data => (
        <div className="h-auto">
          <div className="h-auto pt-30px lg:pt-56px">
            <div className="container mx-auto relative max-w-320px sm:max-w-424 lg:max-w-848 xl:max-w-1025">
              <Alert
                type={state.alert}
                title={state.title}
                content={state.content}
                show={showAlert}
                onClose={handleCloseAlert.bind(this)}
              />
              <div className="w-auto mx-20px pb-203px lg:pb-54px lg:inline-flex lg:justify-between">
                <div className="lg:w-358px lg:h-135px lg:pt-7px lg:pb-6px flex lg:content-between flex-wrap text-14 txtc-lgtxtl">
                  <h3 className="font-bold w-full lg:w-auto mb-20px lg:mb-0">Assine nossa Newsletter mensal</h3>
                  <p className="font-display lg:w-350px leading-145 mb-20px lg:mb-0">
                    Acompanhe-nos recebendo mensalmente novidades sobre o mercado de tecnologia no seu email.
                  </p>
                  <form className="mx-auto lg:mx-0 inline-flex w-320px">
                    <input
                      className="no-outline on-focus bg-white float-left xs:w-215px h-41px mr-10px px-16px font-display text-cian-1 border border-black-8 rounded text-14"
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={e => changeEmail(e.target.value)}
                    ></input>
                    <button
                      className="no-outline on-focus float-right w-85px lg:w-123px h-41px ml-10px bg-cian-1 hover:bg-cian-3 text-12 text-white font-semibold rounded"
                      type="submit"
                      onClick={e => handleSubmit(e)}
                    >
                      ASSINAR
                </button>
                  </form>
                </div>
                <div className="absolute lg:relative w-full left-0 -bottom-28 xs:-bottom-32 lg:bottom-0 lg:w-180px lg:h-228px lg:pt-5px lg:-mb-85px xl:mr-0 xl:ml-85px">
                  <img className="mx-auto" src={data.mimi.publicURL} alt="mimi codengage" />
                </div>
                <div className="w-full lg:w-auto justify-between inline-flex h-148px mt-29px lg:mt-0 lg:mb-0">
                  <div className="lg:w-161px lg:h-119px lg:mb-26px pt-3px xl:ml-88px text-14 font-display">
                    <p>+55 46 2605-0031</p>
                    <p>+55 46 99985-8593</p>
                    <p>contato@codengage.com</p>
                    <p>comercial@codengage.com</p>
                    <p>rh@codengage.com</p>
                  </div>
                  <div className="c-grid w-82px lg:h-full lg:ml-40px xl:ml-68px font-display text-14 text-cian-3">
                    <Link className="inline-flex no-outline" to="/#empresa"><img src={data.icon_play_cian.publicURL} alt="icon list" />&nbsp;Empresa</Link>
                    <Link className="inline-flex no-outline" to="/#servicos"><img src={data.icon_play_cian.publicURL} alt="icon list" />&nbsp;Serviços</Link>
                    <Link className="inline-flex no-outline" to="/#clientes"><img src={data.icon_play_cian.publicURL} alt="icon list" />&nbsp;Clientes</Link>
                    <Link className="inline-flex no-outline" to="/#testemunho"><img src={data.icon_play_cian.publicURL} alt="icon list" />&nbsp;Testemunho</Link>
                    <Link className="inline-flex no-outline" to="/#talentos"><img src={data.icon_play_cian.publicURL} alt="icon list" />&nbsp;Talentos</Link>
                    <Link className="inline-flex no-outline" to="/#contato"><img src={data.icon_play_cian.publicURL} alt="icon list" />&nbsp;Contato</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-50px bg-black-1">
              <div className="mx-20px xl:mx-auto lg:max-w-1110 h-full">
                <div className="inline-flex justify-end h-11px items-center mt-21px mb-18px">
                  <img className="lg:w-7px h-7px" src={data.copyright_regular.publicURL} alt="copyright icon" />
                  <p className="text-white text-10 font-display">&nbsp;Codengage 2019</p>
                </div>
                <div className="relative inline-flex justify-between w-73px h-18px float-right mt-17px mb-15px">
                  <SocialIcons data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default Footer
