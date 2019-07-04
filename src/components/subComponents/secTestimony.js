import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function SecTestimony() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="h-1674px md:h-746px bg-white pt-30px md:pt-40px pb-30ps md:pb-60px">
      <div className="w-320px md:w-1060px mx-20px md:mx-auto">
        <div className="md:mx-auto font-semibold text-34 md:text-58 text-center leading-none md:leading-normal">
          <span className="text-black-3">O que nossos clientes </span>
          <span className="text-cian-1">pensam de nós?</span>
        </div>
        <div className="md:w-817px md:mx-auto text-center mt-30px md:mt-25p md:mb-53-23px">
          <p className="text-14 md:text-18 font-display text-black-3 leading-tight">
            Valorizamos cada opinião, independente da polaridade. Ficamos muito honrados com feedback’s positivos que nos valorizam ou negativos que nos fazem crescer profissionalmente.
        </p>
        </div>
        <div className="md:inline-flex md:justify-between w-full h-1455px md:h-434px ">
          <div className="h-453px md:h-auto w-full md:w-307px mt-30px md:mt-0 flex md:content-between flex-wrap">
            <img className="w-full md:w-auto" src="/imgs/foto1.png" alt="foto Felix Rode" />
            <p className="px-5px md:px-0 text-14 font-display text-center md:text-left leading-130 md:leading-105 mt-30px md:mt-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="w-full font-semibold text-center md:text-left mt-20px md:mt-0">
              <p className="text-cian-1 text-16">Felix Rode</p>
              <p className="text-14 text-black-3">CTO Editora Sanar</p>
            </div>
          </div>
          <div className="h-453px md:h-auto w-full md:w-307px mt-30px md:mt-0 flex md:content-between flex-wrap">
            <img className="w-full md:w-auto" src="/imgs/foto2.png" alt="foto Samantha Firman" />
            <p className="px-5px md:px-0 text-14 font-display text-center md:text-left leading-130 md:leading-105 mt-30px md:mt-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="w-full font-semibold text-center md:text-left mt-20px md:mt-0">
              <p className="text-cian-1 text-16">Samantha Firman</p>
              <p className="text-14 text-black-3">CEO Company</p>
            </div>
          </div>
          <div className="h-453px md:h-auto w-full md:w-307px mt-30px md:mt-0 flex md:content-between flex-wrap">
            <img className="w-full md:w-auto" src="/imgs/foto3.png" alt="foto Samantha Firman" />
            <p className="px-5px md:px-0 text-14 font-display text-center md:text-left leading-130 md:leading-105 mt-30px md:mt-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="w-full font-semibold text-center md:text-left mt-20px md:mt-0">
              <p className="text-cian-1 text-16">Samantha Firman</p>
              <p className="text-14 text-black-3">CEO Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecTestimony;