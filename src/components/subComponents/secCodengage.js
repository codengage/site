import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function secCodengage() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section id="empresa" className="bg-white h-auto">
      <div className="container h-auto pt-30px md:pt-40px mx-auto">
        <div className="md:w-662px mx-20px md:mx-auto leading-none md:leading-105 lg:leading-120 xl:leading-normal text-center font-semibold text-34 md:text-48-97 lg:text-58">
          <span className="text-black-1">Uma empresa formada </span>
          <span className="text-cian-1">por pessoas.</span>
        </div>
        <div className="md:w-662px lg:w-889px h-auto mx-20px md:mx-auto text-center mt-30px md:mt-25px mb-38px">
          <p className="text-14 md:text-18 font-display text-black-3 leading-tight">
            Somos um time de profissionais de TI engajados e apaixonados por agregar conhecimento aos nossos clientes através da prestação de serviços. Nossa sede está localizada em uma das regiões mais promissoras para se investir na construção de negócios digitais, com qualidade de vida e tempo de sobra pra explorar os melhores caminhos.
            </p>
        </div>
      </div>
      <div className="h-auto xl:h-677px md:w-full bg-cover px-20px" style={{ backgroundImage: 'url(/images/background_full.svg)' }}>
        <div className="lg:w-581px h-full mx-auto max-w-366 md:max-w-480 lg:max-w-677 bg-cian-1 opacity-95">
          <div className="h-full ml-36-90px md:ml-67px mr-23-48px md:mr-42-63px pt-33-28px lg:pt-60-42px">
            <div className="h-161-28px lg:h-292-83px mb-32-91px lg:mb-59-75px mx-auto">
              <img className="h-full lg:float-left" src="/images/lula.svg" alt="lula I love tech" />
            </div>
            <div className="h-139-31px md:h-213px mb-28-22px lg:mb-50px text-left leading-120 md:leading-130 lg:leading-normal text-16 md:text-24 lg:text-26 mx-auto">
              <span className="text-white">Acreditamos muito nas pessoas</span>
              <span>, somente elas possuem o poder da transformação. Uma pessoa motivada pode acessar o inacessível,</span>
              <span className="text-white"> rompendo barreiras</span>
              <span>, saindo da imaginação para a construção em pouquíssimo tempo.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default secCodengage;