import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Header({ siteTitle }) {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex flex-wrap items-center justify-between w-1110px h-80px mx-auto">
        <Link to="/" className="flex items-center no-underline text-white">
          <img className="float-left" src="/imgs/logo-codengage.svg" alt="logo-codengage" />
        </Link>
        
        <div className="float-right inline-flex items-center justify-between float-right w-630px h-full font-display text-black-1">
            <Link to="/#0">Empresa</Link>
            <Link to="/#1">Serviços</Link>
            <Link to="/#2">Clientes</Link>
            <Link to="/#3">Testemunho</Link>
            <Link to="/#4">Talentos</Link>
            <Link to="/#5">Contato</Link>
          </div>

        {/* <button
          className="absolute block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button> */}
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
