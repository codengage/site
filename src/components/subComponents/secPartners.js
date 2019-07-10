import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function SecPartners() {
  const [activeCarousel, changeActiveCarousel] = useState(0);

  function dragInit(event) {
    console.log('drag',event.screenX)
  }

  const logos = [
    { 1: 'dm', 2: 'sanar' },
    { 1: 'matera', 2: 'leigado' },
    { 1: 'consisanet', 2: 'wedotax' },
    { 1: 'maxmilhas', 2: 'otl' },
    { 1: 'hci', 2: 'db1' },
    { 1: 'kiper', 2: 'sponte' }
  ]

  return (
    <section id="clientes" className="h-auto bg-cover" style={{ backgroundImage: 'url(/images/background_full.svg)' }}>
      <div className="bg-black-1 opacity-95 h-full pt-30px lg:pt-40px">
        <div className="container h-full xl:max-w-1110 mx-auto">
          <div className="mx-20px font-semibold text-34 md:text-48-97 lg:text-58 text-center leading-none lg:leading-normal">
            <span className="text-white">Empresas que </span>
            <span className="text-cian-1">estão conosco.</span>
          </div>
          <div className="lg:max-w-980 xl:w-817px mx-auto text-center mt-25px mb-20px md:mb-40px lg:mb-53-23px">
            <p className="text-14 md:text-18 font-display text-white leading-tight mx-20px">
              Estamos orgulhosos e gratos em poder colaborar, de alguma forma, com o crescimento dos nossos clientes abaixo. Sabemos que a confiança é tudo em um relacionamento duradouro e deve ser conquistada com muito trabalho e comprometimento.
          </p>
          </div>
          <div className="xl:max-w-1065 md:h-245px xl:h-341-79px invisible absolute md:visible md:relative flex content-between flex-wrap pb-30px lg:pb-50px px-20px lg:px-40px xl:px-0">
            <div className="flex justify-between flex-wrap md:w-full">
              <img className="md:w-135px" src="/images/dm.svg" alt="icon " />
              <img className="md:w-135px" src="/images/sanar.svg" alt="icon " />
              <img className="md:w-135px" src="/images/matera.svg" alt="icon " />
              <img className="md:w-135px" src="/images/leigado.svg" alt="icon " />
            </div>
            <div className="flex justify-between flex-wrap md:w-full">
              <img className="md:w-135px" src="/images/consisanet.svg" alt="icon " />
              <img className="md:w-135px" src="/images/wedotax.svg" alt="icon " />
              <img className="md:w-135px" src="/images/maxmilhas.svg" alt="icon " />
              <img className="md:w-135px" src="/images/otl.svg" alt="icon " />
            </div>
            <div className="flex justify-between flex-wrap md:w-full">
              <img className="md:w-135px" src="/images/hci.svg" alt="icon " />
              <img className="md:w-135px" src="/images/db1.svg" alt="icon " />
              <img className="md:w-135px" src="/images/kiper.svg" alt="icon " />
              <img className="md:w-135px" src="/images/sponte.svg" alt="icon " />
            </div>
          </div>
          <div draggable className="h-107px w-full md:absolute md:invisible flex" onDragStart={e => dragInit(e)}>
            {/* <button className="h-full" onClick={() => changeActiveCarousel()} >
              <img className="py-28px pl-20px pr-10px" src="icons/prev-arrow.svg" alt="prev icon" />
            </button> */}
            {/* <div className="w-auto my-auto inline-flex justify-between">
              <img className="w-112-50px mr-15px" src={`/images/dm.svg`} alt="icon " />
              <img className="w-112-50px" src={`/images/sanar.svg`} alt="icon " />
            </div> */}
            {
              logos.map((logo, index) => {
                return index === activeCarousel &&
                  <div key={index} className="w-full mx-20px my-auto inline-flex justify-between">
                    <img className="w-150px" src={`/images/${logo[1]}.svg`} alt="icon " />
                    <img className="w-150px" src={`/images/${logo[2]}.svg`} alt="icon " />
                  </div>
              })
            }
            {/* <button className="h-full" onClick={() => changeActiveCarousel()} >
              <img className="py-28px pr-20px pl-10px" src="icons/next-arrow.svg" alt="next icon" />
            </button> */}
          </div>
        </div>
      </div>
    </section >
  )
}

export default SecPartners;