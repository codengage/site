import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function SecSquad() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="h-574px bg-white">
      <div className="mx-auto w-1110px h-full">
        <div className="float-left w-290px h-431-8 pt-60px">
          <p className="text-46 font-semibold leading-115">Monte seu “Squad” profissional conosco:</p>
          <img className="mt-21-1px ml-60px mb-82-19px" src="/imgs/rosto.svg" alt="rosto mulher" />
        </div>
        <div className="float-right h-452px w-734px ml-86px mt-62px mb-60px">
          <div className="float-left flex content-between flex-wrap h-full w-358px">
            <div className="inline-flex">
              <span className="text-14 text-black-3 font-display pr-18px">
                <span className="text-cian-1 text-26">ILUSTRADORES</span> A competência deste profissional faz enriquecer o seu produto com o poder da imagem. “Uma imagem diz mais que mil palavras”.
            </span>
              <img src="/imgs/icon_ilustracao.svg" alt=" icon" />
            </div>
            <div className="inline-flex">
              <span className="text-14 text-black-3 font-display pr-18px">
                <span className="text-cian-1 text-26">DEVOPS</span> Para manter um ambiente produtivo é essencial cultivar a automatização de processos. “Descomplicar” é a palavra certa para descrever esta função.
            </span>
              <img src="/imgs/icon_devops.svg" alt=" icon" />
            </div>
            <div className="inline-flex">
              <span className="text-14 text-black-3 font-display pr-18px">
                <span className="text-cian-1 text-26">PM/PO</span> Product manager e Product owner trabalham em prol do mesmo objetivo: servir de ponte entre os anseios do mercado e o processo de construção.
            </span>
              <img src="/imgs/icon_po.svg" alt=" icon" />
            </div>
            <div className="inline-flex">
              <span className="text-14 text-black-3 font-display pr-18px">
                <span className="text-cian-1 text-26">ANALISTA</span> A complexidade apresentada em cenários diversificados de negócios exige respostas para perguntas muitas vezes não feitas ainda.
            </span>
              <img src="/imgs/icon_analista.svg" alt=" icon" />
            </div>
          </div>
          <div className="float-right flex content-between flex-wrap h-full w-358px">
            <div className="inline-flex">
              <span className="text-14 text-black-3 font-display pr-18px">
                <span className="text-cian-1 text-26">UX/UI</span> Entregar uma experiência marcante ao usuário vai muito além de construir telas, requer aprendizado, pesquisa e ciência.
            </span>
              <img src="/imgs/icon_ux.svg" alt=" icon" />
            </div>
            <div className="inline-flex">
              <span className="text-14 text-black-3 font-display pr-18px">
                <span className="text-cian-1 text-26">DEVELOPER</span> Não são penas empilhadores de códigos, este profissional é sem dúvida a mente criativa que transcende a realidade da imaginação.
            </span>
              <img src="/imgs/icon_dev.svg" alt=" icon" />
            </div>
            <div className="inline-flex">
              <span className="text-14 text-black-3 font-display pr-18px">
                <span className="text-cian-1 text-26">QA</span> Para entregar valor é necessário validar sua construção etapa por etapa. A função deste profissional é ajudar a garantir a qualidade de cada umas das etapas.
            </span>
              <img src="/imgs/icon_qa.svg" alt=" icon" />
            </div>
            <div className="inline-flex">
              <span className="text-14 text-black-3 font-display pr-18px">
                <span className="text-cian-1 text-26">ARQUITETO</span> “Por traz de uma grande obra, sempre existirá um grande mestre”. Esta frase resume bem o papel de um Arquiteto de Software.
            </span>
              <img src="/imgs/icon_arquiteto.svg" alt=" icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecSquad;