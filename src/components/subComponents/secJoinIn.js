import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function SecJoinIn() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="h-432px pt-40px pb-60px">
      <div className="mx-auto text-center">
        <span className="font-semibold text-58 text-black-3">Junte-se </span>
        <span className="font-semibold text-58 text-cian-1">a nós.</span>
      </div>
      {/* <div className="ml-519-78px mr-551px h-253px"> */}
      <div className="w-848px mx-auto h-253px">

        <div className="inline-flex w-full justify-between">
          <div className="float-left w-162px mt-18px">
            <img src="/imgs/cafe.svg" alt="coffe" />
          </div>
          <div className="float-right w-541px mt-48px flex content-between flex-wrap">
            <p className="font-display text-18 leading-140">
              Venha trabalhar em uma empresa dinâmica, motivada que cresce 100% ao ano desde a sua fundação em 2015. Seja um profissional diferenciado, trabalhando com uma equipe talentosa que não mede esforços para evoluir e compartilhar conhecimentos.
        </p>
            <button className="h-52px w-245px ml-3px bg-black-1 hover:bg-black-5 text-18 text-white font-semibold rounded">
              VAGAS ABERTAS
        </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecJoinIn;