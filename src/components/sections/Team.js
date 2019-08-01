import React from "react";
import { graphql, StaticQuery } from "gatsby";

function SecTeam() {

  return (
    <StaticQuery
      query={graphql`
        {
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
        }
      `}
      render={data => (
        <section className="container mxa-ha lg:w-1110px pt-29-52px lg:pt-40px">
          <div className="sec-intro font-semibold md:leading-tight lg:mx-auto mx-20px">
            <span className="text-black-1">Um time </span>
            <span className="text-cian-1">completo de TI.</span>
          </div>
          <div className="w-auto md:w-662px lg:w-889px h-auto lg:h-91px mx-20px md:mx-auto text-center mt-22-50px md:mt-25px mb-39-50px md:mb-38px">
            {
              data.content.edges.map(({ node }) =>
                <p key={node.frontmatter.title} className="text-14 md:text-17 text-black-3 leading-tight">
                  {node.excerpt}
                </p>
              )
            }
          </div>
          <div className="w-full mxa-ha lg:h-405px xl:h-469-18px mb-27px md:mb-40px lg:mb-50px lg:max-w-980 xl:max-w-1110">
            <div className="h-auto lg:float-left w-320px md:w-546-11px lg:w-456px xl:w-546-11px mxa-ha lg:mx-0">
              <img className="float-left img-mobile" src={data.mobile1.publicURL} alt={data.mobile1.name} />
              <img className="float-right img-mobile" src={data.mobile2.publicURL} alt={data.mobile2.name} />
              <img className="mb-38-50px lg:mb-0 hidden md:block" src={data.mobile.publicURL} alt={data.mobile.name} />
            </div>
            <div className="lg:float-right w-320px md:w-456px xl:h-full mx-auto lg:mx-0 txtc-lgtxtl">
              <div className="h-auto xl:h-247px">
                <p className="font-semibold text-28 lg:text-34 xl:text-46 leading-105">Buscamos a excelência do produto através da cultura criativa, design e engenharia de software.</p>
              </div>
              <div className="h-auto lg:h-165px mt-30px lg:mt-43px">
                <p className="text-18 lg:text-26 text-black-3 leading-tight font-display">
                  Oferecemos a assessoria completa para empresas quem desejam desenvolver novos produtos digitais, ou reforçar seu corpo técnico atual.
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