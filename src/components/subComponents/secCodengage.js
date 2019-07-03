import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function secCodengage() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="h-974px">
      <div className="bg-white h-297px pt-40px">
        <div className="mx-auto text-center">
          <span className="font-semibold text-58 text-black-1">Uma empresa formada </span>
          <span className="font-semibold text-58 text-cian-1">por pessoas.</span>
        </div>
        <div className="w-889px h-91px mx-auto text-center mt-25px mb-38px">
          <p className="text-18 font-display text-black-3 leading-tight">
            Somos um time de profissionais de TI engajados e apaixonados por agregar conhecimento aos nossos clientes através da prestação de serviços. Nossa sede está localizada em uma das regiões mais promissoras para se investir na construção de negócios digitais, com qualidade de vida e tempo de sobra pra explorar os melhores caminhos.
            </p>
        </div>
      </div>
      <div className="h-677px w-full bg-cover" style={{ backgroundImage: 'url(/imgs/background_full.svg)' }}>
        <div className="w-581px h-full bg-cian-1 opacity-95 mx-auto">
          <div className="h-full ml-67px mr-42-63px pt-60-42px">
            <div className="w-471-37px h-292-83px mb-59-75px">
              <img className="float-left" src="/imgs/lula.svg" alt="lula I love tech" />
            </div>
            <div className="w-452px h-213px mb-50px text-left">
              <span className="text-24 text-white">Acreditamos muito nas pessoas</span>
              <span className="text-24">, somente elas possuem o poder da transformação. Uma pessoa motivada pode acessar o inacessível,</span>
              <span className="text-24 text-white"> rompendo barreiras</span>
              <span className="text-24">, saindo da imaginação para a construção em pouquíssimo tempo.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default secCodengage;