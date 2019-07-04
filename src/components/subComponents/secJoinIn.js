import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function SecJoinIn() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="h-509px md:h-432px pt-30px md:pt-40px pb-30px md:pb-60px">
      <div className="mx-auto text-center font-semibold text-34 md:text-58 leading-none md:leading-normal">
        <span className="text-black-3">Junte-se </span>
        <span className="text-cian-1">a nós.</span>
      </div>
      {/* <div className="ml-519-78px mr-551px h-253px"> */}
      <div className="w-320px md:w-848px mx-20px md:mx-auto h-391-13px md:h-253px">

        <div className="md:inline-flex md:w-full md:justify-between">
          <div className="mx-auto md:mx-0 md:float-left w-138-32px md:w-162px mt-18px">
            <img src="/imgs/cafe.svg" alt="coffe" />
          </div>
          <div className="md:float-right md:w-541px mt-30px md:mt-48px flex md:content-between flex-wrap">
            <p className="font-display text-14 md:text-18 leading-140 text-center md:text-left">
              Venha trabalhar em uma empresa dinâmica, motivada que cresce 100% ao ano desde a sua fundação em 2015. Seja um profissional diferenciado, trabalhando com uma equipe talentosa que não mede esforços para evoluir e compartilhar conhecimentos.
            </p>
            <button className="h-52px w-full md:w-245px md:ml-3px mt-20px md:mt-0 bg-black-1 hover:bg-black-5 text-18 text-white font-semibold rounded">
              VAGAS ABERTAS
        </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecJoinIn;