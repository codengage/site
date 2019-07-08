import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function secInitial() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="container mt-54-14px lg:mt-85px xl:mt-164-23px mb-30px lg:mb-80px xl:mb-159px lg:w-974px xxl:w-1111px h-auto mx-auto">
      <div className="lg:float-left w-288px md:w-350px lg:w-452px xxl:w-546-11px h-172-34px lg:h-full mx-auto lg:mx-0">
        <img className="float-left" src="/imgs/balanco.svg" alt="Menos é mais" />
      </div>
      <div className="lg:float-right xl:w-456px mt-50px lg:mt-0 text-center lg:text-left">
        <div className="h-51px xl:h-79px w-298px md:w-369px lg:w-auto mx-auto lg:mx-0 font-semibold text-48-97 md:text-58 lg:text-78 leading-none">
          <span className="text-black-1">Menos é </span>
          <span className="text-cian-1">mais.</span>
        </div>
        <div className="w-296px lg:w-428px h-85px lg:h-126px mx-auto lg:ml-3px mt-15px lg:mt-38px lg:mr-25px">
          <p className="text-18 lg:text-26 text-center lg:text-left leading-120 lg:leading-normal text-black-3 leading-tight">
            Este conceito minimalista pode facilitar muito o seu negócio. Saiba como podemos ajudá-lo a alcançar seus objetivos com menos.
          </p>
        </div>
        <div className="h-52px w-320px lg:w-245px mt-30px xl:mt-55px lg:ml-3px mx-auto left-0">
          <button className="w-full h-full bg-cian-1 hover:bg-cian-3 text-18 text-white font-semibold rounded">
            INICIAR NAVEGAÇÃO
          </button>
        </div>
      </div>
    </section>
  )
}

export default secInitial;