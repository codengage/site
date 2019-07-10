import { Link } from "gatsby";
import React, { useState } from "react";

function Header({ siteTitle, scroll }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className={ isExpanded ? "bg-white" : "" }>
      <div className="mx-auto h-auto">
        <div className="absolute invisible lg:relative lg:visible container h-57-82px xl:w-1110px mx-auto">
          <div className="inline-flex justify-between w-73px h-18px float-right mt-30px">
            <a href="https://www.instagram.com/codengagecom/" target="_blank">
              <img src="/icons/instagram-brands.svg" alt="instagram icon" />
            </a>
            <a href="https://www.facebook.com/codengagecom/" target="_blank">
              <img src="/icons/facebook-square-brands.svg" alt="facebook icon" />
            </a>
            <a href="https://www.linkedin.com/company/codengage" target="_blank">
              <img src="/icons/linkedin-brands.svg" alt="linkedin icon" />
            </a>
          </div>
        </div>
        <div className={ scroll ? "transition-slower transition-timing-ease-out transition-property-bg transition-delay-longer bg-white fixed h-64px lg:h-80px w-full top-0 z-1 shadow" : "mt-20px lg:mt-0 h-39-80px lg:h-80px w-full"}>
          <div className="container pl-20px lg:pl-0 flex flex-wrap items-center justify-between xl:w-1110px h-full mx-auto">
            <Link to="/" className="float-left flex items-center w-125-63px lg:w-162-95px lg:h-65-78px">
              <img src="/images/logo-codengage.svg" alt="logo-codengage" />
            </Link>
            
            <div className="md:float-right absolute hidden md:relative md:inline-flex md:visible items-center justify-between float-right md:w-456px lg:w-630px h-full pr-20px lg:pr-0 font-display text-black-1">
                <Link to="/#empresa">Empresa</Link>
                <Link to="/#servicos">Serviços</Link>
                <Link to="/#clientes">Clientes</Link>
                <Link to="/#testemunho">Testemunho</Link>
                <Link to="/#talentos">Talentos</Link>
                <Link to="/#contato">Contato</Link>
              </div>

            <button 
              className={ isExpanded ? "float-right absolute invisible md:absolute md:invisible flex items-center rounded mr-26-38px" : "float-right relative visible md:absolute md:invisible flex items-center rounded mr-26-38px" } 
              onClick={() => toggleExpansion(!isExpanded)}>
              <img src="/icons/icon-menu.svg" alt="show menu"/>
            </button>
            <button
              className={ isExpanded ? "float-right relative visible md:absolute md:invisible flex items-center rounded mr-26-38px text-24" : "float-right absolute invisible md:absolute md:invisible flex rounded mr-26-38px text-24" }
              onClick={() => toggleExpansion(!isExpanded)}>
              &times;
            </button>
          </div>
        </div>
        <div 
          className={ isExpanded ? ( scroll ? "fixed top-52 z-1 bg-white w-auto pt-22px shadow-bottom visible md:invisible": "z-1 bg-white w-auto pt-22px shadow-bottom absolute visible md:invisible" ) : "w-auto mt-22px shadow-bottom absolute invisible" }>
          <div className="w-auto h-auto mx-20px flex content-between flex-wrap font-display text-14 text-black-1">
              <Link className="w-full pt-6px pb-6px border-b border-black-9 inline-flex" to="/#empresa" onClick={() => toggleExpansion(!isExpanded)} ><img src="icons/icon-play.svg" alt="icon list"/>&nbsp;Empresa</Link>
              <Link className="w-full pt-6px pb-6px border-b border-black-9 inline-flex" to="/#servicos" onClick={() => toggleExpansion(!isExpanded)}><img src="icons/icon-play.svg" alt="icon list"/>&nbsp;Serviços</Link>
              <Link className="w-full pt-6px pb-6px border-b border-black-9 inline-flex" to="/#clientes" onClick={() => toggleExpansion(!isExpanded)} ><img src="icons/icon-play.svg" alt="icon list"/>&nbsp;Clientes</Link>
              <Link className="w-full pt-6px pb-6px border-b border-black-9 inline-flex" to="/#testemunho" onClick={() => toggleExpansion(!isExpanded)} ><img src="icons/icon-play.svg" alt="icon list"/>&nbsp;Testemunho</Link>
              <Link className="w-full pt-6px pb-6px border-b border-black-9 inline-flex" to="/#talentos" onClick={() => toggleExpansion(!isExpanded)} ><img src="icons/icon-play.svg" alt="icon list"/>&nbsp;Talentos</Link>
              <Link className="w-full pt-6px pb-6px border-b border-black-9 inline-flex" to="/#contato" onClick={() => toggleExpansion(!isExpanded)} ><img src="icons/icon-play.svg" alt="icon list"/>&nbsp;Contato</Link>

              <div className="inline-flex justify-between w-100px h-18px mt-22px mx-auto mb-18px">
                <a href="https://www.instagram.com/codengagecom/" target="_blank">
                  <img src="/icons/instagram-brands.svg" alt="instagram icon" />
                </a>
                <a href="https://www.facebook.com/codengagecom/" target="_blank">
                  <img src="/icons/facebook-square-brands.svg" alt="facebook icon" />
                </a>
                <a href="https://www.linkedin.com/company/codengage" target="_blank">
                  <img src="/icons/linkedin-brands.svg" alt="linkedin icon" />
                </a>
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
