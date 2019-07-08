import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function SecPartners() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section id="clientes" className="h-auto bg-cover" style={{ backgroundImage: 'url(/imgs/background_full.svg)' }}>
      <div className="bg-black-1 opacity-95 h-full pt-30px lg:pt-40px">
        <div className="container h-full xl:max-w-1110 mx-auto">
          <div className="mx-20px font-semibold text-34 md:text-48-97 lg:text-58 text-center leading-none lg:leading-normal">
            <span className="text-white">Empresas que </span>
            <span className="text-cian-1">estão conosco.</span>
          </div>
          <div className="lg:max-w-980 xl:w-817px mx-auto text-center mt-25px mb-40px lg:mb-53-23px">
            <p className="text-14 md:text-18 font-display text-white leading-tight mx-20px">
            Estamos orgulhosos e gratos em poder colaborar, de alguma forma, com o crescimento dos nossos clientes abaixo. Sabemos que a confiança é tudo em um relacionamento duradouro e deve ser conquistada com muito trabalho e comprometimento.
          </p>
          </div>
          <div className="xl:max-w-1065 md:h-245px xl:h-341-79px hidden md:flex content-between flex-wrap pb-30px lg:pb-50px px-20px lg:px-40px xl:px-0">
            <div className="flex justify-between flex-wrap md:w-full">
              <img className="md:w-135px" src="/imgs/dm.svg" alt="icon " />
              <img className="md:w-135px" src="/imgs/sanar.svg" alt="icon " />
              <img className="md:w-135px" src="/imgs/matera.svg" alt="icon " />
              <img className="md:w-135px" src="/imgs/leigado.svg" alt="icon " />
            </div>
            <div className="flex justify-between flex-wrap md:w-full">
              <img className="md:w-135px" src="/imgs/consisanet.svg" alt="icon " />
              <img className="md:w-135px" src="/imgs/wedotax.svg" alt="icon " />
              <img className="md:w-135px" src="/imgs/maxmilhas.svg" alt="icon " />
              <img className="md:w-135px" src="/imgs/otl.svg" alt="icon " />
            </div>
            <div className="flex justify-between flex-wrap md:w-full">
              <img className="md:w-135px" src="/imgs/hci.svg" alt="icon " />
              <img className="md:w-135px" src="/imgs/db1.svg" alt="icon " />
              <img className="md:w-135px" src="/imgs/kiper.svg" alt="icon " />
              <img className="md:w-135px" src="/imgs/sponte.svg" alt="icon " />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecPartners;