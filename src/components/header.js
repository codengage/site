import { StaticQuery, graphql, Link } from "gatsby";
import React, { useState } from "react";

import SocialIcons from './socialIcons';

function Header({ scroll }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <StaticQuery
      query={graphql`
        query {
          logo: file(name: {eq:"logo-codengage"}, sourceInstanceName: {eq: "images"}) {
            name
            publicURL
          },
          instagram: file(name: {eq:"instagram-brands"}, sourceInstanceName: {eq: "icons"}) {
            name
            publicURL
          },
          facebook: file(name: {eq:"facebook-square-brands"}, sourceInstanceName: {eq: "icons"}) {
            name
            publicURL
          },
          linkedin: file(name: {eq:"linkedin-brands"}, sourceInstanceName: {eq: "icons"}) {
            name
            publicURL
          },
          icon_menu: file(name: {eq:"icon-menu"}, sourceInstanceName: {eq: "icons"}) {
            name
            publicURL
          },
          icon_play: file(name: {eq:"icon-play"}, sourceInstanceName: {eq: "icons"}) {
            name
            publicURL
          },
        }
      `}
      render={data => (
        <nav className={isExpanded ? "bg-white" : ""}>
          <div className={scroll ? "mxa-ha" : "mxa-ha md:px-20px xl:px-0"}>
            <div className={scroll ? "ab-inv hidden" : "container mx-auto ab-inv md-vis-rel h-58px xl:w-1110px md:pr-20px lg:pr-0"}>
              <div className="inline-flex justify-between w-73px h-18px float-right md:mt-20px lg:mt-30px">
                <SocialIcons data={data} />
              </div>
            </div>
            <div className={scroll ? "lg:px-20px xl:px-0 transition-fast transition-timing-ease-out transition-property-bg transition-delay-long bg-white fixed h-64px lg:h-80px w-full top-0 z-1 shadow" : "mt-20px md:mt-0 h-40px lg:h-80px w-full"}>
              <div className={scroll ? "container mx-auto pl-20px md:pl-40px md:pr-20px lg:pr-0 lg:pl-0 xl:px-0 j-grid items-center xl:w-1110px h-full" : "container mx-auto pl-20px lg:pl-0 j-grid items-center xl:w-1110px h-full"}>
                <Link to="/" className="no-outline float-left flex items-center w-126px lg:w-163px lg:h-66px">
                  <img src={data.logo.publicURL} alt={data.logo.name} />
                </Link>
                <div className="md:float-right absolute hidden md-vis-rel md:inline-flex items-center justify-between float-right md:w-456px lg:w-630px h-full pr-20px lg:pr-0 font-display text-black-1">
                  <Link className="no-outline" to="/#empresa">Empresa</Link>
                  <Link className="no-outline" to="/#servicos">Serviços</Link>
                  <Link className="no-outline" to="/#clientes">Clientes</Link>
                  <Link className="no-outline" to="/#testemunho">Testemunho</Link>
                  <Link className="no-outline" to="/#talentos">Talentos</Link>
                  <Link className="no-outline" to="/#contato">Contato</Link>
                </div>

                <button
                  className={isExpanded ? "no-outline ab-inv f-ic mr-26px" : "no-outline md-ab-inv f-ic relative visible mr-26px"}
                  onClick={() => toggleExpansion(!isExpanded)}>
                  <img src={data.icon_menu.publicURL} alt={data.icon_menu.name} />
                </button>
                <button
                  className={isExpanded ? "no-outline md-ab-inv f-ic relative visible mr-26px text-24" : "no-outline ab-inv md-ab-inv flex mr-26px text-24"}
                  onClick={() => toggleExpansion(!isExpanded)}>
                  &times;
            </button>
              </div>
            </div>
            <div
              className={isExpanded ? (scroll ? "fixed top-52 z-1 bg-white w-full pt-22px shadow-bottom visible md:invisible" : "z-1 bg-white w-full pt-22px shadow-bottom absolute visible md:invisible") : "ab-inv hidden"}>
              <div className="c-grid w-auto h-auto mx-20px font-display text-14 text-black-1">
                <Link className="header-link no-outline" to="/#empresa" onClick={() => toggleExpansion(!isExpanded)} ><img src={data.icon_play.publicURL} alt="icon list" />&nbsp;Empresa</Link>
                <Link className="header-link no-outline" to="/#servicos" onClick={() => toggleExpansion(!isExpanded)}><img src={data.icon_play.publicURL} alt="icon list" />&nbsp;Serviços</Link>
                <Link className="header-link no-outline" to="/#clientes" onClick={() => toggleExpansion(!isExpanded)} ><img src={data.icon_play.publicURL} alt="icon list" />&nbsp;Clientes</Link>
                <Link className="header-link no-outline" to="/#testemunho" onClick={() => toggleExpansion(!isExpanded)} ><img src={data.icon_play.publicURL} alt="icon list" />&nbsp;Testemunho</Link>
                <Link className="header-link no-outline" to="/#talentos" onClick={() => toggleExpansion(!isExpanded)} ><img src={data.icon_play.publicURL} alt="icon list" />&nbsp;Talentos</Link>
                <Link className="header-link no-outline" to="/#contato" onClick={() => toggleExpansion(!isExpanded)} ><img src={data.icon_play.publicURL} alt="icon list" />&nbsp;Contato</Link>

                <div className="inline-flex justify-between w-100px h-18px mt-22px mx-auto mb-18px">
                  <SocialIcons data={data} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    />
  )
}

export default Header;
