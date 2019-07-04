import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function SecMeeting() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="h-743px md:h-702px w-320px md:w-1110px mx-20px md:mx-auto">
      <div className="md:h-full md:inline-flex">
        <div className="w-full md:w-734-38px h-250-14px md:h-574-05px mt-30px md:mt-59px mb-30px md:mb-0">
          <img className="" src="/imgs/web.svg" alt="dev" />
        </div>
        <div className="md:w-269px h-full md:ml-111-63px">
          <p className="w-full md:h-165px text-18 md:text-26 font-display leading-125 md:leading-115 mt-30px md:mt-65px text-center md:text-left">
            Somos ágeis, metódicos e valorizamos a autonomia para entregar serviços com qualidade.
          </p>
          <div className="md:w-264px mt-30px md:mt-7px">
            <img className="w-148-26px md:w-205-29px md:h-162-15px mx-auto" src="/imgs/tela.svg" alt="" />
            <p className="md:w-full md:h-90px text-18 md:text-14 font-display leading-130 mt-35px md:mt-48-89px text-center md:text-left">
              Sua empresa segue um modelo tradicional de desenvolvimento? Podemos ajudá-lo a implementar uma cultura de startup.
            </p>
            <button className="h-52px w-full md:w-245px mt-34px bg-cian-1 hover:bg-cian-3 text-18 text-white font-semibold rounded">
              SOLICITE UM ORÇAMENTO
          </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecMeeting;