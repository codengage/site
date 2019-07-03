import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function SecTeam() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="h-822px w-1110px mx-auto pt-40px">
      <div className="text-center">
        <span className="font-semibold text-58 text-black-1">Um time </span>
        <span className="font-semibold text-58 text-cian-1">completo de TI.</span>
      </div>
      <div className="w-889px h-91px mx-auto text-center mt-25px mb-38px">
        <p className="text-17 text-black-3 leading-tight">
          Somos um braço forte de desenvolvimento para empresas que buscam através da tecnologia atingir novos horizontes de mercado. Fornecemos times dedicados, estrutura e métodos de trabalhos exclusivo para o seu negócio digital. Cada profissional é selecionado para suprir a necessidade técnica na construção de produtos inovadores.
          </p>
      </div>
      <div className="h-469-18px">
        <div className="float-left w-546-11px h-full">
          <img className="float-left" src="/imgs/mobile.svg" alt="imgs/mobile" />
          {/* <img className="float-left" src="/assets/imgs/mobile1.svg" alt="imgs/mobile"/> */}
        </div>
        <div className="float-right w-456px h-full">
          <div className="h-247px">
            <p className="font-semibold text-46 leading-105">Buscamos a excelência do produto através da cultura criativa, design e engenharia de software.</p>
          </div>
          <div className="h-165px mt-43px">
            <p className="text-26 text-black-3 leading-tight font-display">
              Oferecemos a assessoria completa para empresas quem desejam desenvolver novos produtos digitais, ou reforçar seu corpo técnico atual.
              </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecTeam;