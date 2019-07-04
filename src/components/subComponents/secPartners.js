import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function SecPartners() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="h-438px md:h-677px bg-cover" style={{ backgroundImage: 'url(/imgs/background_full.svg)' }}>
      <div className="bg-black-1 opacity-95 h-full pt-30px md:pt-40px">
        <div className="h-full md:w-1110px mx-auto">
          <div className="mx-20ps md:mx-auto font-semibold text-34 md:text-58 text-center leading-none md:leading-normal">
            <span className="text-white">Empresas que </span>
            <span className="text-cian-1">estão conosco.</span>
          </div>
          <div className="md:w-817px mx-20px md:mx-auto text-center mt-25px mb-53-23px">
            <p className="text-14 md:text-18 font-display text-white leading-tight">
            Estamos orgulhosos e gratos em poder colaborar, de alguma forma, com o crescimento dos nossos clientes abaixo. Sabemos que a confiança é tudo em um relacionamento duradouro e deve ser conquistada com muito trabalho e comprometimento.
          </p>
          </div>
          <div className="md:w-1065px h-341-79px hidden md:flex content-between flex-wrap">
            <div className="flex justify-between flex-wrap md:w-full">
              <img src="/imgs/dm.svg" alt="icon " />
              <img src="/imgs/sanar.svg" alt="icon " />
              <img src="/imgs/matera.svg" alt="icon " />
              <img src="/imgs/leigado.svg" alt="icon " />
            </div>
            <div className="flex justify-between flex-wrap md:w-full">
              <img src="/imgs/consisanet.svg" alt="icon " />
              <img src="/imgs/wedotax.svg" alt="icon " />
              <img src="/imgs/maxmilhas.svg" alt="icon " />
              <img src="/imgs/otl.svg" alt="icon " />
            </div>
            <div className="flex justify-between flex-wrap md:w-full">
              <img src="/imgs/hci.svg" alt="icon " />
              <img src="/imgs/db1.svg" alt="icon " />
              <img src="/imgs/kiper.svg" alt="icon " />
              <img src="/imgs/sponte.svg" alt="icon " />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecPartners;