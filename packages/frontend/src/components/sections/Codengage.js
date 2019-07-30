import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Anchor from '../anchor';

function secCodengage() {

  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(filter: { frontmatter: { title: { eq: "Codengage" } }}) {
            edges {
              node {
                excerpt(pruneLength: 330)
                frontmatter {
                  title
                }   
              }
            }
          }
        }
      `}
      render={data => (
        <section className="bg-white h-auto">
          <div className="container mxa-ha pt-30px md:pt-40px">
            <Anchor id="empresa" />
            <div className="md:w-662px mx-20px md:mx-auto leading-none md:leading-105 lg:leading-120 xl:leading-normal text-center font-semibold text-34 md:text-48-97 lg:text-58">
              <span className="text-black-1">Uma empresa formada </span>
              <span className="text-cian-1">por pessoas.</span>
            </div>
            <div className="md:w-662px lg:w-889px h-auto mx-20px md:mx-auto text-center mt-30px md:mt-25px mb-38px">
              {
                data.allMarkdownRemark.edges.map(({ node }) =>
                  <p key={node.frontmatter.title} className="txtc-14-18 text-black-3 leading-tight">
                    {node.excerpt}
                  </p>
                )
              }
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
      )}
    />
  )
}

export default secCodengage;