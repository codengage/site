import { Link } from "gatsby";
import React, { useState } from "react";

function Header({ scroll }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className={ isExpanded ? "bg-white" : "" }>
      <div className={ scroll ? "mxa-ha" : "mxa-ha md:px-20px xl:px-0" }>
        <div className={ scroll ? "ab-inv" : "container mx-auto ab-inv md-vis-rel h-57-82px xl:w-1110px md:pr-20px lg:pr-0" }>
          <div className="inline-flex justify-between w-73px h-18px float-right md:mt-20px lg:mt-30px">
            <a href="https://www.instagram.com/codengagecom/" rel="noopener">
              <img src="/icons/instagram-brands.svg" alt="instagram icon" />
            </a>
            <a href="https://www.facebook.com/codengagecom/" rel="noopener">
              <img src="/icons/facebook-square-brands.svg" alt="facebook icon" />
            </a>
            <a href="https://www.linkedin.com/company/codengage" rel="noopener">
              <img src="/icons/linkedin-brands.svg" alt="linkedin icon" />
            </a>
          </div>
        </div>
        <div className={ scroll ? "lg:px-20px xl:px-0 transition-slower transition-timing-ease-out transition-property-bg transition-delay-longer bg-white fixed h-64px lg:h-80px w-full top-0 z-1 shadow" : "mt-20px md:mt-0 h-39-80px lg:h-80px w-full"}>
          <div className={ scroll ? "container mx-auto pl-20px md:pl-40px md:pr-20px lg:pr-0 lg:pl-0 xl:px-0 j-grid items-center xl:w-1110px h-full" : "container mx-auto pl-20px lg:pl-0 j-grid items-center xl:w-1110px h-full"}>
            <Link to="/" className="float-left flex items-center w-125-63px lg:w-162-95px lg:h-65-78px">
              <img src="/images/logo-codengage.svg" alt="logo-codengage" />
            </Link>
            
            <div className="md:float-right absolute hidden md-vis-rel md:inline-flex items-center justify-between float-right md:w-456px lg:w-630px h-full pr-20px lg:pr-0 font-display text-black-1">
                <Link to="/#empresa">Empresa</Link>
                <Link to="/#servicos">Serviços</Link>
                <Link to="/#clientes">Clientes</Link>
                <Link to="/#testemunho">Testemunho</Link>
                <Link to="/#talentos">Talentos</Link>
                <Link to="/#contato">Contato</Link>
              </div>

            <button 
              className={ isExpanded ? "float-right ab-inv flex items-center rounded mr-26-38px" : "float-right relative visible md:absolute md:invisible flex items-center rounded mr-26-38px" } 
              onClick={() => toggleExpansion(!isExpanded)}>
              <img src="/icons/icon-menu.svg" alt="show menu"/>
            </button>
            <button
              className={ isExpanded ? "float-right relative visible md:absolute md:invisible flex items-center rounded mr-26-38px text-24" : "float-right ab-inv md:absolute md:invisible flex rounded mr-26-38px text-24" }
              onClick={() => toggleExpansion(!isExpanded)}>
              &times;
            </button>
          </div>
        </div>
        <div 
          className={ isExpanded ? ( scroll ? "fixed top-52 z-1 bg-white w-full pt-22px shadow-bottom visible md:invisible": "z-1 bg-white w-full pt-22px shadow-bottom absolute visible md:invisible" ) : "ab-inv" }>
          <div className="c-grid w-auto h-auto mx-20px font-display text-14 text-black-1">
              <Link className="header-link" to="/#empresa" onClick={() => toggleExpansion(!isExpanded)} ><img src="icons/icon-play.svg" alt="icon list"/>&nbsp;Empresa</Link>
              <Link className="header-link" to="/#servicos" onClick={() => toggleExpansion(!isExpanded)}><img src="icons/icon-play.svg" alt="icon list"/>&nbsp;Serviços</Link>
              <Link className="header-link" to="/#clientes" onClick={() => toggleExpansion(!isExpanded)} ><img src="icons/icon-play.svg" alt="icon list"/>&nbsp;Clientes</Link>
              <Link className="header-link" to="/#testemunho" onClick={() => toggleExpansion(!isExpanded)} ><img src="icons/icon-play.svg" alt="icon list"/>&nbsp;Testemunho</Link>
              <Link className="header-link" to="/#talentos" onClick={() => toggleExpansion(!isExpanded)} ><img src="icons/icon-play.svg" alt="icon list"/>&nbsp;Talentos</Link>
              <Link className="header-link" to="/#contato" onClick={() => toggleExpansion(!isExpanded)} ><img src="icons/icon-play.svg" alt="icon list"/>&nbsp;Contato</Link>

              <div className="inline-flex justify-between w-100px h-18px mt-22px mx-auto mb-18px">
                <a href="https://www.instagram.com/codengagecom/" rel="noopener">
                  <img src="/icons/instagram-brands.svg" alt="instagram icon" />
                </a>
                <a href="https://www.facebook.com/codengagecom/" rel="noopener">
                  <img src="/icons/facebook-square-brands.svg" alt="facebook icon" />
                </a>
                <a href="https://www.linkedin.com/company/codengage" rel="noopener">
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
