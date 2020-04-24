import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Anchor from '../anchor';

function SecTeam() {

  return (
    <StaticQuery
      query={graphql`
        {
          mobile: file(name: {eq:"mobile"}, sourceInstanceName: {eq: "images"}) {
            name
            publicURL
          },
          mobile1: file(name: {eq:"mobile1"}, sourceInstanceName: {eq: "images"}) {
            name
            publicURL
          },
          mobile2: file(name: {eq:"mobile2"}, sourceInstanceName: {eq: "images"}) {
            name
            publicURL
          },
          content: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Team" } }}) {
            edges {
              node {
                excerpt(pruneLength: 340)
                frontmatter {
                  title
                }   
              }
            }
          },
        }
      `}
      render={data => (
        <section className="container mxa-ha lg:w-1110px pt-30px lg:pt-40px">
        <Anchor id="servicos" />
          <div className="sec-intro font-semibold lg:mx-auto mx-20px">
            <h2>
              <span className="text-black-1">Um time </span>
              <span className="text-cian-1">completo de TI.</span>
            </h2>
          </div>
          <div className="w-auto md:w-662px lg:w-889px h-auto lg:h-91px mx-20px md:mx-auto text-center mt-23px md:mt-25px mb-40px md:mb-38px">
            {
              data.content.edges.map(({ node }) =>
                <p key={node.frontmatter.title} className="text-14 md:text-17 text-black-3">
                  {node.excerpt}
                </p>
              )
            }
          </div>
          <div className="w-full mxa-ha lg:h-405px xl:h-469px mb-27px md:mb-40px lg:mb-50px lg:max-w-980 xl:max-w-1110">
            <div className="h-auto lg:float-left w-320px md:w-546px lg:w-456px xl:w-546px mxa-ha lg:mx-0">
              <img className="float-left img-mobile" src={data.mobile1.publicURL} alt={data.mobile1.name} />
              <img className="float-right img-mobile" src={data.mobile2.publicURL} alt={data.mobile2.name} />
              <img className="mb-39px lg:mb-0 hidden md:block" src={data.mobile.publicURL} alt={data.mobile.name} />
            </div>
            <div className="lg:float-right w-320px md:w-456px xl:h-full mx-auto lg:mx-0 txtc-lgtxtl">
              <div className="h-auto xl:h-247px">
                <p className="font-semibold text-28 lg:text-34 xl:text-46">Buscamos a excelência do produto por meio da cultura criativa, design e engenharia de software.</p>
              </div>
              <div className="h-auto lg:h-165px mt-30px lg:mt-43px">
                <p className="text-18 lg:text-26 text-black-3 font-display">
                  Oferecemos a assessoria completa para empresas que desejam desenvolver novos produtos, ou reforçar sua equipe técnica atual.
              </p>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  )
}
export default SecTeam;