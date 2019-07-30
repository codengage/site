import { Link } from "gatsby";
import React, { useState, useReducer } from "react";

import Alert from './alert';

function Footer() {
  const [email, changeEmail] = useState("");
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
          content: "Por favor, informe um email." 
        };
      case 'error':
        changeShowAlert(true);
        return { 
          alert: action.type, 
          title: "Falha ao registrar e-mail!",
          content: "Por favor, tente novamente mais tarde." 
        };
      case 'success':
        changeShowAlert(true);
        return { 
          alert: action.type, 
          title: "Sucesso!", 
          content: "Obrigado por assinar nossa Newsletter." };
      default:
        return { initialState };
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email) {
      const data = {
        method: 'POST',
        headers: {
          "Accept": "application/json"
        },
        mode: 'cors',
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          tags: [
            { "name": "Newsletter", "status": "active" }
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
        .catch (e => {
          dispatch({ type: 'error' });
        })
    } else {
      dispatch({ type: 'incomplete' });
    }
  }

  return (
    <div className="h-auto">
      <div className="h-auto pt-30px lg:pt-56px">
        <div className="container mx-auto relative max-w-320px sm:max-w-424 lg:max-w-848 xl:max-w-1025">
          <Alert type={state.alert} title={state.title} content={state.content} show={showAlert} onClose={handleCloseAlert.bind(this)} />
          <div className="w-auto mx-20px pb-203px lg:pb-54px lg:inline-flex lg:justify-between">
            <div className="lg:w-357-74px lg:h-135px lg:pt-7px lg:pb-6-09px flex lg:content-between flex-wrap text-14 txtc-lgtxtl">
              <h5 className="font-bold w-full lg:w-auto mb-20px lg:mb-0">Assine nossa Newsletter mensal</h5>
              <p className="font-display lg:w-350px leading-145 mb-20px lg:mb-0">Acompanhe-nos recebendo mensalmente novidades sobre o mercado de tecnologia no seu email.</p>
              <form className="mx-auto lg:mx-0 inline-flex w-320px">
                <input className="no-outline on-focus bg-white float-left xs:w-214-8px h-40-91px mr-10px px-16px font-display text-cian-1 border border-black-8 rounded text-14" type="email" placeholder="Email" required value={email} onChange={e => changeEmail(e.target.value)}></input>
                <button className="no-outline on-focus float-right w-85px lg:w-122-74px h-40-91px ml-10px bg-cian-1 hover:bg-cian-3 text-12 text-white font-semibold rounded" type="submit" onClick={e => handleSubmit(e)}>
                  ASSINAR
                </button>
              </form>
            </div>
            <div className="absolute lg:relative w-full left-0 -bottom-28 xs:-bottom-32 lg:bottom-0 lg:w-179-55px lg:h-228-23px lg:pt-4-89px lg:-mb-85-12px xl:mr-0 xl:ml-84-65px">
              <img className="mx-auto" src="/images/mimi.svg" alt="mimi codengage" />
            </div>
            <div className="w-full lg:w-auto justify-between inline-flex h-148px mt-29px lg:mt-0 lg:mb-0">
              <div className="lg:w-161px lg:h-119px lg:mb-26px pt-3px xl:ml-88-4px text-14 font-display">
                <p>+55 46 2605-0031</p>
                <p>+55 46 99985-8593</p>
                <p>contato@codengage.com</p>
                <p>comercial@codengage.com</p>
                <p>rh@codengage.com</p>
              </div>
              <div className="c-grid w-82px lg:h-full lg:ml-40px xl:ml-67-53px font-display text-14 text-cian-3">
                <Link className="inline-flex no-outline on-focus" to="/#empresa"><img src="icons/icon-play-cian.svg" alt="icon list"/>&nbsp;Empresa</Link>
                <Link className="inline-flex no-outline on-focus" to="/#servicos"><img src="icons/icon-play-cian.svg" alt="icon list"/>&nbsp;Serviços</Link>
                <Link className="inline-flex no-outline on-focus" to="/#clientes"><img src="icons/icon-play-cian.svg" alt="icon list"/>&nbsp;Clientes</Link>
                <Link className="inline-flex no-outline on-focus" to="/#testemunho"><img src="icons/icon-play-cian.svg" alt="icon list"/>&nbsp;Testemunho</Link>
                <Link className="inline-flex no-outline on-focus" to="/#talentos"><img src="icons/icon-play-cian.svg" alt="icon list"/>&nbsp;Talentos</Link>
                <Link className="inline-flex no-outline on-focus" to="/#contato"><img src="icons/icon-play-cian.svg" alt="icon list"/>&nbsp;Contato</Link>
              </div>
            </div>
            
          </div>
        </div>
        <div className="h-50px bg-black-1">
          <div className="mx-20px xl:mx-auto lg:max-w-1110 h-full">
            <div className="inline-flex justify-end h-11px items-center mt-21px mb-18px">
              <img className="lg:w-7px h-7px" src="/icons/copyright-regular.svg" alt="copyright icon" />
              <p className="text-white text-10 font-display">&nbsp;Codengage 2019</p>
            </div>
            <div className="relative inline-flex justify-between w-73px h-18px float-right mt-17px mb-15px">
              <a href="https://www.instagram.com/codengagecom/" rel="noopener" className="no-outline on-focus">
                <img src="/icons/instagram-brands-white.svg" alt="instagram icon" />
              </a>
              <a href="https://www.facebook.com/codengagecom/" rel="noopener" className="no-outline on-focus">
                <img src="/icons/facebook-square-brands-white.svg" alt="facebook icon" />
              </a>
              <a href="https://www.linkedin.com/company/codengage" rel="noopener" className="no-outline on-focus">
                <img src="/icons/linkedin-brands-white.svg" alt="linkedin icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;