import React from "react";
// import { graphql, StaticQuery } from "gatsby";

function SecSquad() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="bg-white h-auto pb-10px md:pb-20px xl:pb-0">
      <div className="container h-full pt-30px lg:pt-60px mx-auto lg:max-w-980 xl:max-w-1110">
        <div className="lg:float-left mx-auto md:w-203px xl:w-290px h-auto text-center xl:text-left">
          <p className="max-w-380 mx-auto text-28 mdtext-34 lg:text-46 font-semibold leading-110 md:leading-115">Monte seu “Squad” profissional conosco:</p>
          <img className="w-auto mt-35px md:mt-21-1px mx-auto xl:ml-60px xl:mr-0 mb-35px xl:mb-82-19px" src="/images/rosto.svg" alt="rosto mulher" />
        </div>
        <div className="lg:float-right h-auto xl:w-734px xl:ml-86px lg:mb-60px leading-128 lg:leading-normal text-14 text-black-3 ">
          <div className="mx-20px lg:mx-0 md:float-left flex content-between flex-wrap md:h-full lg:w-358px">
            <div className="max-w-424 mx-auto xl:mx-0 mb-28px md:mb-15px xl:mb-35 inline-flex">
              <span className="font-display pr-18px">
                <span className="text-cian-1 text-18 md:text-26">ILUSTRADORES</span> A competência deste profissional faz enriquecer o seu produto com o poder da imagem. “Uma imagem diz mais que mil palavras”.
            </span>
              <img src="/images/icon_ilustracao.svg" alt=" icon" />
            </div>
            <div className="max-w-424 mx-auto xl:mx-0 mb-28px md:mb-15px xl:mb-35 inline-flex">
              <span className="font-display pr-18px">
                <span className="text-cian-1 text-18 md:text-26">DEVOPS</span> Para manter um ambiente produtivo é essencial cultivar a automatização de processos. “Descomplicar” é a palavra certa para descrever esta função.
            </span>
              <img src="/images/icon_devops.svg" alt=" icon" />
            </div>
            <div className="max-w-424 mx-auto xl:mx-0 mb-28px md:mb-15px xl:mb-35 inline-flex">
              <span className="font-display pr-18px">
                <span className="text-cian-1 text-18 md:text-26">PM/PO</span> Product manager e Product owner trabalham em prol do mesmo objetivo: servir de ponte entre os anseios do mercado e o processo de construção.
            </span>
              <img src="/images/icon_po.svg" alt=" icon" />
            </div>
            <div className="max-w-424 mx-auto xl:mx-0 mb-28px md:mb-15px xl:mb-35 inline-flex">
              <span className="font-display pr-18px">
                <span className="text-cian-1 text-18 md:text-26">ANALISTA</span> A complexidade apresentada em cenários diversificados de negócios exige respostas para perguntas muitas vezes não feitas ainda.
            </span>
              <img src="/images/icon_analista.svg" alt=" icon" />
            </div>
          </div>
          <div className="mx-20px lg:mx-0 md:float-right flex content-between flex-wrap md:h-full lg:w-358px">
            <div className="max-w-424 mx-auto xl:mx-0 mb-28px md:mb-15px xl:mb-35 inline-flex">
              <span className="font-display pr-18px">
                <span className="text-cian-1 text-18 md:text-26">UX/UI</span> Entregar uma experiência marcante ao usuário vai muito além de construir telas, requer aprendizado, pesquisa e ciência.
            </span>
              <img src="/images/icon_ux.svg" alt=" icon" />
            </div>
            <div className="max-w-424 mx-auto xl:mx-0 mb-28px md:mb-15px xl:mb-35 inline-flex">
              <span className="font-display pr-18px">
                <span className="text-cian-1 text-18 md:text-26">DEVELOPER</span> Não são penas empilhadores de códigos, este profissional é sem dúvida a mente criativa que transcende a realidade da imaginação.
            </span>
              <img src="/images/icon_dev.svg" alt=" icon" />
            </div>
            <div className="max-w-424 mx-auto xl:mx-0 mb-28px md:mb-15px xl:mb-35 inline-flex">
              <span className="font-display pr-18px">
                <span className="text-cian-1 text-18 md:text-26">QA</span> Para entregar valor é necessário validar sua construção etapa por etapa. A função deste profissional é ajudar a garantir a qualidade de cada umas das etapas.
            </span>
              <img src="/images/icon_qa.svg" alt=" icon" />
            </div>
            <div className="max-w-424 mx-auto xl:mx-0 mb-28px md:mb-15px xl:mb-35 inline-flex">
              <span className="font-display pr-18px">
                <span className="text-cian-1 text-18 md:text-26">ARQUITETO</span> “Por traz de uma grande obra, sempre existirá um grande mestre”. Esta frase resume bem o papel de um Arquiteto de Software.
            </span>
              <img src="/images/icon_arquiteto.svg" alt=" icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecSquad;