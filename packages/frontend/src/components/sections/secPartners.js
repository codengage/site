import { Link, StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

import 'macro-carousel';

function SecPartners() {

  const logos = [
    { 1: 'dm', 2: 'sanar' },
    { 1: 'matera', 2: 'leigado' },
    { 1: 'consisanet', 2: 'wedotax' },
    { 1: 'maxmilhas', 2: 'otl' },
    { 1: 'hci', 2: 'db1' },
    { 1: 'kiper', 2: 'sponte' }
  ]

  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(filter: { frontmatter: { title: { eq: "Partners" } }}) {
            edges {
              node {
                excerpt(pruneLength: 250)
                frontmatter {
                  title
                }   
              }
            }
          }
        }
      `}
      render={data => (
        <section id="clientes" className="h-auto bg-cover" style={{ backgroundImage: 'url(/images/background_full.svg)' }}>
          <div className="bg-black-1 opacity-95 h-full pt-30px lg:pt-40px">
            <div className="container mx-auto h-full xl:max-w-1110">
              <div className="sec-intro font-semibold mx-20px lg:leading-normal">
                <span className="text-white">Empresas que </span>
                <span className="text-cian-1">estão conosco.</span>
              </div>
              <div className="lg:max-w-980 xl:w-817px mx-auto text-center mt-25px mb-20px md:mb-40px lg:mb-53-23px">
                {
                  data.allMarkdownRemark.edges.map(({ node }) =>
                    <p key={node.frontmatter.title} className="text-14 md:text-18 font-display text-white leading-tight mx-20px">
                      {node.excerpt}
                    </p>
                  )
                }
              </div>
              <div className="c-grid xl:max-w-1065 md:h-245px xl:h-341-79px ab-inv md-vis-rel pb-30px lg:pb-50px px-20px lg:px-40px xl:px-0">
                <div className="j-grid md:w-full">
                  <img className="md:w-135px" src="/images/dm.svg" alt="icon dm" />
                  <img className="md:w-135px" src="/images/sanar.svg" alt="icon sanar" />
                  <img className="md:w-135px" src="/images/matera.svg" alt="icon matera" />
                  <img className="md:w-135px" src="/images/leigado.svg" alt="icon leigado" />
                </div>
                <div className="j-grid md:w-full">
                  <img className="md:w-135px" src="/images/consisanet.svg" alt="icon consisanet" />
                  <img className="md:w-135px" src="/images/wedotax.svg" alt="icon wedotax" />
                  <img className="md:w-135px" src="/images/maxmilhas.svg" alt="icon maxmilhas" />
                  <img className="md:w-135px" src="/images/otl.svg" alt="icon otl" />
                </div>
                <div className="j-grid md:w-full">
                  <img className="md:w-135px" src="/images/hci.svg" alt="icon hci" />
                  <img className="md:w-135px" src="/images/db1.svg" alt="icon db1" />
                  <img className="md:w-135px" src="/images/kiper.svg" alt="icon kiper" />
                  <img className="md:w-135px" src="/images/sponte.svg" alt="icon sponte" />
                </div>
              </div>
              <div className="h-148px w-full md:absolute md:invisible flex mt-50px mb-32px">
                <macro-carousel loop pagination class="w-full">
                  {
                    logos.map((logo, index) => {
                      return (
                        <article key={index} className="w-full mb-30px mr-0">
                          <div className="w-full px-auto inline-flex justify-around">
                            <img className="w-150px" src={`/images/${logo[1]}.svg`} alt={`icon ${logo[1]}`} />
                            <img className="w-150px" src={`/images/${logo[2]}.svg`} alt={`icon ${logo[2]}`} />
                          </div>
                        </article>)
                    })
                  }
                </macro-carousel>
              </div>
            </div>
          </div>
        </section >
      )}
    />
  )
}

export default SecPartners;