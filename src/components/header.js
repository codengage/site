import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Header({ siteTitle }) {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="lg:bg-white">
      <div className="container pl-20px mt-20px lg:pt-0 flex flex-wrap items-center justify-between xl:w-1110px h-39-80px lg:h-80px mx-auto">
        <Link to="/" className="float-left flex items-center w-125-63px lg:w-162-95px lg:h-51-61px">
          <img src="/imgs/logo-codengage.svg" alt="logo-codengage" />
        </Link>
        
        <div className="md:float-right absolute hidden md:relative md:inline-flex md:visible items-center justify-between float-right md:w-456px lg:w-630px h-full pr-20px lg:pr-0 font-display text-black-1">
            <Link to="/#0">Empresa</Link>
            <Link to="/#1">Serviços</Link>
            <Link to="/#2">Clientes</Link>
            <Link to="/#3">Testemunho</Link>
            <Link to="/#4">Talentos</Link>
            <Link to="/#5">Contato</Link>
          </div>

        <button
          className="float-right relative visible md:absolute md:hidden flex items-center rounded pr-26-38px">
        {/*  onClick={() => toggleExpansion(!isExpanded)} */}
          <img src="/icons/icon-menu.svg" alt=""/>
        </button>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
