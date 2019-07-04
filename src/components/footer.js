import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Footer({ siteTitle }) {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div className="h-auto">
      <div className="h-496px md:h-253px pt-30px md:pt-56px">
        <div className="relative w-320px md:w-1025px mx-20px md:mx-auto">
          <div className="pb-203px md:pb-54px md:inline-flex">
            <div className="md:w-357-74px md:h-135px md:pt-7px md:pb-6-09px flex md:content-between flex-wrap text-14 text-center md:text-left">
              <h5 className="font-bold w-full md:w-auto mb-20px md:mb-0">Assine nossa Newsletter mensal</h5>
              <p className="font-display md:w-350px leading-145 mb-20px md:mb-0">Acompanhe-nos recebendo mensalmente novidades sobre o mercado de tecnologia no seu email.</p>
              <form className="md:w-full">
                <input className="w-214-8px h-40-91px mr-10px px-16px font-display text-cian-1 border border-black-8 rounded text-14" id="email_news" type="email" placeholder="Email"></input>
                <button className="w-85px md:w-122-74px h-40-91px ml-10px bg-cian-1 hover:bg-cian-3 text-12 text-white font-semibold rounded" type="submit">
                  ASSINAR
                </button>
              </form>
            </div>
            <div className="absolute md:relative w-full left-0 -bottom-32 md:bottom-0 md:w-179-55px md:h-228-23px md:pt-4-89px md:-mb-85-12px md:mr-0 md:ml-84-65px">
              <img className="mx-auto" src="/imgs/mimi.svg" alt="mimi codengage" />
            </div>
            <div className="w-full md:w-auto justify-between inline-flex h-148px mt-29px md:mt-0  md:mb-0">
              <div className="md:w-161px md:h-119px md:mb-26px pt-3px md:ml-88-4px">
                <p className="text-14 font-display">+55 46 2605-0031</p>
                <p className="text-14 font-display">+55 46 99985-8593</p>
                <p className="text-14 font-display">contato@codengage.com</p>
                <p className="text-14 font-display">comercial@codengage.com</p>
                <p className="text-14 font-display">rh@codengage.com</p>
              </div>
              <div className="w-82px md:h-full md:ml-67-53px flex content-between flex-wrap">
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
          <div className="mx-20px md:mx-auto md:w-1110px h-full">
            <div className="inline-flex justify-end h-11px items-center mt-21px mb-18px">
              <img className="md:w-7px h-7px" src="/icons/copyright-regular.svg" alt="copyright icon" />
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