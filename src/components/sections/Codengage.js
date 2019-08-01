import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Anchor from '../anchor';

function Codengage() {

  return (
    <StaticQuery
      query={graphql`
        {
          content: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Codengage" } }}) {
            edges {
              node {
                excerpt(pruneLength: 330)
                frontmatter {
                  title
                }   
              }
            }
          },
          background_full: file(name: {eq:"background_full"}, sourceInstanceName: {eq: "images"}) {
            name
            publicURL
          },
          lula: file(name: {eq:"lula"}, sourceInstanceName: {eq: "images"}) {
            name
            publicURL
          },
        }
      `}
      render={data => (
        <section className="bg-white h-auto">
          <div className="container mxa-ha pt-30px md:pt-40px">
            <Anchor id="empresa" />
            <div className="mx-20px md:mx-auto leading-none md:leading-105 lg:leading-120 xl:leading-normal text-center font-semibold text-34 md:text-48-97 lg:text-58">
              <span className="text-black-1">Uma empresa formada </span>
              <span className="text-cian-1">por pessoas.</span>
            </div>
            <div className="md:w-662px lg:w-889px h-auto mx-20px md:mx-auto text-center mt-30px md:mt-25px mb-38px">
              {
                data.content.edges.map(({ node }) =>
                  <p key={node.frontmatter.title} className="txtc-14-18 text-black-3 leading-tight">
                    {node.excerpt}
                  </p>
                )
              }
            </div>
          </div>
          <div className="h-auto xl:h-677px md:w-full bg-cover px-20px" style={{ backgroundImage: `url(${data.background_full.publicURL})` }}>
            <div className="lg:w-581px h-full mx-auto max-w-366 md:max-w-480 lg:max-w-677 bg-cian-2">
              <div className="h-full ml-37px md:ml-67px mr-24px md:mr-43px pt-33px lg:pt-61px">
                <div className="h-161px lg:h-293px mb-33px lg:mb-60px mx-auto">
                  <img className="h-full lg:float-left" src={data.lula.publicURL} alt="lula I love tech" />
                </div>
                <div className="h-139px md:h-213px mb-28px lg:mb-50px text-left leading-120 md:leading-130 lg:leading-normal text-16 md:text-24 lg:text-26 mx-auto">
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

export default Codengage;