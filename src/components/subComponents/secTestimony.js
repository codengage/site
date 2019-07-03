import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function SecTestimony() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="h-746px bg-white pt-40px pb-60px">
      <div className="w-1060px mx-auto">
        <div className="mx-auto text-center">
          <span className="font-semibold text-58 text-black-3">O que nossos clientes </span>
          <span className="font-semibold text-58 text-cian-1">pensam de nós?</span>
        </div>
        <div className="w-817px mx-auto text-center mt-25px mb-53-23px">
          <p className="text-18 font-display text-black-3 leading-tight">
            Valorizamos cada opinião, independente da polaridade. Ficamos muito honrados com feedback’s positivos que nos valorizam ou negativos que nos fazem crescer profissionalmente.
        </p>
        </div>
        <div className="inline-flex justify-between w-full h-434px ">
          <div className="w-307px flex content-between flex-wrap">
            <img src="/imgs/foto1.png" alt="foto Felix Rode" />
            <p className="text-14 font-display leading-105">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="font-semibold">
              <p className="text-black-3 text-16">Felix Rode</p>
              <p className="text-14 text-cian-1">CTO Editora Sanar</p>
            </div>
          </div>
          <div className="w-307px flex content-between flex-wrap">
            <img src="/imgs/foto2.png" alt="foto Samantha Firman" />
            <p className="text-14 font-display leading-105">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="font-semibold">
              <p className="text-black-3 text-16">Samantha Firman</p>
              <p className="text-14 text-cian-1">CEO Company</p>
            </div>
          </div>
          <div className="w-307px flex content-between flex-wrap">
            <img src="/imgs/foto3.png" alt="foto Samantha Firman" />
            <p className="text-14 font-display leading-105">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="font-semibold">
              <p className="text-black-3 text-16">Samantha Firman</p>
              <p className="text-14 text-cian-1">CEO Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecTestimony;