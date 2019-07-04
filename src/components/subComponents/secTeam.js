import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function SecTeam() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="container h-auto lg:w-1110px mx-auto pt-29-52px lg:pt-40px">
      <div className="font-semibold text-34 lg:text-58 text-center mx-20px lg:mx-auto leading-none md:leading-tight">
        <span className="text-black-1">Um time </span>
        <span className="text-cian-1">completo de TI.</span>
      </div>
      <div className="w-auto md:w-662px lg:w-889px h-auto lg:h-91px mx-20px md:mx-auto text-center mt-22-50px md:mt-25px mb-39-50px md:mb-38px">
        <p className="text-14 md:text-17 text-black-3 leading-tight">
          Somos um braço forte de desenvolvimento para empresas que buscam através da tecnologia atingir novos horizontes de mercado. Fornecemos profissionais dedicados, estrutura e métodos de trabalhos exclusivo para o seu negócio digital. Cada profissional é selecionado para suprir a necessidade técnica na construção de produtos inovadores.
          </p>
      </div>
      <div className="w-full h-auto lg:h-405px xl:h-469-18px mb-27px md:mb-40px lg:mb-50px lg:max-w-980 xl:max-w-1110 mx-auto">
        <div className="lg:float-left w-320px md:w-546-11px lg:w-456px xl:w-546-11px h-auto mx-auto lg:mx-0">
          <img className="flex float-left w-154-82px md:hidden" src="/imgs/mobile1.svg" alt="imgs/mobile1" />
          <img className="flex float-right w-154-82px md:hidden" src="/imgs/mobile2.svg" alt="imgs/mobile2" />
          <img className="hidden md:block" src="/imgs/mobile.svg" alt="imgs/mobile" />
          {/* <img className="float-left" src="/assets/imgs/mobile1.svg" alt="imgs/mobile"/> */}
        </div>
        <div className="lg:float-right w-320px md:w-456px xl:h-full mx-auto lg:mx-0 text-center lg:text-left mt-38-50px lg:mt-0">
          <div className="h-auto xl:h-247px">
            <p className="font-semibold text-28 lg:text-34 xl:text-46 leading-105">Buscamos a excelência do produto através da cultura criativa, design e engenharia de software.</p>
          </div>
          <div className="h-auto lg:h-165px mt-30px lg:mt-43px">
            <p className="text-18 lg:text-26 text-black-3 leading-tight font-display">
              Oferecemos a assessoria completa para empresas quem desejam desenvolver novos produtos digitais, ou reforçar seu corpo técnico atual.
              </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecTeam;