import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function SecJoinIn() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="h-auto pt-30px md:pt-40px pb-30px lg:pb-60px">
      <div className="container mx-auto text-center font-semibold text-34 md:text-46 xl:text-58 leading-none md:leading-normal">
        <span className="text-black-3">Junte-se </span>
        <span className="text-cian-1">a nós.</span>
      </div>
      <div className="max-w-380 sm:max-w-424 lg:max-w-848 mx-auto h-auto">
        <div className="mx-20px lg:inline-flex lg:w-full lg:justify-between">
          <div className="mx-auto lg:mx-0 lg:float-left w-138-32px md:w-162px mt-18px">
            <img src="/imgs/cafe.svg" alt="coffe" />
          </div>
          <div className="lg:float-right lg:w-541px mt-30px lg:mt-48px flex lg:content-between flex-wrap">
            <p className="font-display text-14 md:text-18 leading-140 text-center lg:text-left">
              Venha trabalhar em uma empresa dinâmica, motivada que cresce 100% ao ano desde a sua fundação em 2015. Seja um profissional diferenciado, trabalhando com uma equipe talentosa que não mede esforços para evoluir e compartilhar conhecimentos.
            </p>
            <button className="h-52px w-full md:w-245px mx-auto lg:ml-3px mt-20px lg:mt-0 bg-black-1 hover:bg-black-5 text-18 text-white font-semibold rounded">
              VAGAS ABERTAS
        </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecJoinIn;