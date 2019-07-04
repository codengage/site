import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function SecContact() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <section className="h-710px md:h-662px bg-cover" style={{ backgroundImage: 'url(/imgs/background_full.svg)' }}>
      <div className="bg-cian-1 opacity-98 h-711px md:h-663px pt-30px md:pt-40px pb-30px md:pb-60px">
        <div className="mx-auto text-center font-semibold text-34 md:text-58 leading-none md:leading-normal">
          <span className="text-black-3">Entre em contato </span>
          <span className="text-white">conosco.</span>
        </div>
        <div className="w-320px md:w-817px mx-20px md:mx-auto pt-15px">
          <p className="font-display text-14 md:;text-18 text-black-3 text-center leading-snug">Estamos localizados no sudoeste paranaense, região reconhecida como um dos maiores pólos de tecnologia do Paraná, com universidades, instituições de incentivo ao empreendedorismo digital, núcleos de tecnologia e mais de 100 empresas do setor.</p>
        </div>
        <div className="w-320px md:w-734px h-369px mx-20px md:mx-auto mt-25px md:mt-23px">
          <form className="md:w-full">
            <div className="md:w-full mb-20px">
              <input className="w-full h-52px px-16px bg-white opacity-100 font-display text-black-1 border border-black-8 rounded leading-tight" id="name" type="text" placeholder="Nome Completo"></input>
            </div>
            <div className="md:w-full mb-20px">
              <input className="w-full md:w-357px mb-20px md:mb-0 h-52px mr-10px px-16px bg-white opacity-100 font-display text-black-1 border border-black-8 rounded leading-tight" id="email" type="email" placeholder="Email"></input>
              <input className="w-full md:w-357px h-52px md:ml-10px px-16px bg-white opacity-100 font-display text-black-1 border border-black-8 rounded leading-tight" id="telefone" type="text" placeholder="Telefone"></input>
            </div>
            <div className="w-full mb-15px">
              <textarea className="w-full h-153-81px max-h-180 px-16px py-16px bg-white opacity-100 font-display text-black-1 border border-black-8 rounded leading-tight" id="msg" type="" placeholder="Mensagem"></textarea>
            </div>
            <button className="h-52px w-full md:w-245px bg-black-1 hover:bg-black-5 text-18 text-white font-semibold rounded" type="submit">
              ENVIAR
          </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SecContact;