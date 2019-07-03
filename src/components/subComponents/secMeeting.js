import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function SecMeeting() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="h-702px w-1110px mx-auto">
      <div className="h-full inline-flex">
        <div className="w-734-38px h-574-05px mt-59px">
          <img className="" src="/imgs/web.svg" alt="dev" />
        </div>
        <div className="w-269px h-full ml-111-63px">
          <p className="w-full h-165px text-26 font-display leading-115 mt-65px">
            Somos ágeis, metódicos e valorizamos a autonomia para entregar serviços com qualidade.
        </p>
          <div className="w-264px mt-7px">
            <img className="w-205-29 h-162-15px mx-auto" src="/imgs/tela.svg" alt="" />
            <p className="w-full h-90px text-14 font-display leading-130 mt-48-89px">Multiplicamos a cultura horizontal de entrega de valor em curto espaço de tempo, melhorando os processos, buscando a otimização dos recursos com dedicação e conhecimento aplicado.</p>
            <button className="h-52px w-245px mt-34px bg-cian-1 hover:bg-cian-3 text-18 text-white font-semibold rounded">
              SOLICITE UM ORÇAMENTO
          </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecMeeting;