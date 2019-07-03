import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function secInitial() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="mt-164-23px mb-159px w-1111px h-350px mx-auto">
      <div className="float-left w-546-11px h-full">
        <img className="float-left" src="/imgs/balanco.svg" alt="Menos é mais" />
      </div>
      <div className="float-right w-456px h-full">
        <div className="h-79px">
          <span className="font-semibold text-78 text-black-1">Menos é </span>
          <span className="font-semibold text-78 text-cian-1">mais.</span>
        </div>
        <div className="w-428px h-126px ml-3px mt-38px mr-25px">
          <p className="text-26 text-black-3 leading-tight">
            Este conceito minimalista pode facilitar muito o seu negócio. Saiba como podemos ajudá-lo a alcançar seus objetivos com menos.
          </p>
        </div>
        <button className="h-52px w-245px mt-55px ml-3px bg-cian-1 hover:bg-cian-3 text-18 text-white font-semibold rounded">
          INICIAR NAVEGAÇÃO
        </button>
      </div>
    </section>
  )
}

export default secInitial;