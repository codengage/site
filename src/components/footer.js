import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Footer({ siteTitle }) {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div className="h-auto">
      <div className="h-auto pt-30px lg:pt-56px">
        <div className="mx-auto container relative max-w-320px sm:max-w-424 lg:max-w-848 xl:max-w-1025">
          <div className="w-auto mx-20px pb-203px lg:pb-54px lg:inline-flex lg:justify-between">
            <div className="lg:w-357-74px lg:h-135px lg:pt-7px lg:pb-6-09px flex lg:content-between flex-wrap text-14 text-center lg:text-left">
              <h5 className="font-bold w-full lg:w-auto mb-20px lg:mb-0">Assine nossa Newsletter mensal</h5>
              <p className="font-display lg:w-350px leading-145 mb-20px lg:mb-0">Acompanhe-nos recebendo mensalmente novidades sobre o mercado de tecnologia no seu email.</p>
              <form className="mx-auto inline-flex w-320px">
                <input className="float-left w-214-8px h-40-91px mr-10px px-16px font-display text-cian-1 border border-black-8 rounded text-14" id="email_news" type="email" placeholder="Email"></input>
                <button className="float-right w-85px lg:w-122-74px h-40-91px ml-10px bg-cian-1 hover:bg-cian-3 text-12 text-white font-semibold rounded" type="submit">
                  ASSINAR
                </button>
              </form>
            </div>
            <div className="absolute lg:relative w-full left-0 -bottom-32 lg:bottom-0 lg:w-179-55px lg:h-228-23px lg:pt-4-89px lg:-mb-85-12px xl:mr-0 xl:ml-84-65px">
              <img className="mx-auto" src="/imgs/mimi.svg" alt="mimi codengage" />
            </div>
            <div className="w-full lg:w-auto justify-between inline-flex h-148px mt-29px lg:mt-0 lg:mb-0">
              <div className="lg:w-161px lg:h-119px lg:mb-26px pt-3px xl:ml-88-4px">
                <p className="text-14 font-display">+55 46 2605-0031</p>
                <p className="text-14 font-display">+55 46 99985-8593</p>
                <p className="text-14 font-display">contato@codengage.com</p>
                <p className="text-14 font-display">comercial@codengage.com</p>
                <p className="text-14 font-display">rh@codengage.com</p>
              </div>
              <div className="w-82px lg:h-full lg:ml-40px xl:ml-67-53px flex content-between flex-wrap">
                <a className="font-display text-14 text-cian-3" href="#0">‣ Empresa</a>
                <a className="font-display text-14 text-cian-3" href="#1">‣ Serviços</a>
                <a className="font-display text-14 text-cian-3" href="#2">‣ Clientes</a>
                <a className="font-display text-14 text-cian-3" href="#3">‣ Testemunho</a>
                <a className="font-display text-14 text-cian-3" href="#4">‣ Talentos</a>
                <a className="font-display text-14 text-cian-3" href="#5">‣ Contato</a>
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
            <div className="inline-flex justify-between w-73px h-18px float-right mt-17px mb-15px">
              <a href="/instagram">
                <img src="/icons/instagram-brands-white.svg" alt="instagram icon" />
              </a>
              <a href="/facebook">
                <img src="/icons/facebook-square-brands-white.svg" alt="facebook icon" />
              </a>
              <a href="/linkedin">
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