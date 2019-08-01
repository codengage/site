import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Anchor from '../anchor';

function Meeting() {

  return (
    <StaticQuery
      query={graphql`
        {
          content: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Meeting" } }}) {
            edges {
              node {
                excerpt
                frontmatter {
                  title
                }   
              }
            }
          },
          tela: file(name: {eq:"tela"}, sourceInstanceName: {eq: "images"}) {
            name
            publicURL
          },
          web: file(name: {eq:"web"}, sourceInstanceName: {eq: "images"}) {
            name
            publicURL
          }
        }
      `}
      render={data => (
        <section className="mxa-ha xl:max-w-1110">
          <div className="container h-full lg:inline-flex">
            <Anchor id="servicos" />
            <div className="w-auto md:w-546px lg:w-734px mxa-ha mt-30px lg:mt-59px mb-30px lg:mb-60px md:mb-0">
              <img className="mx-20px" src={data.web.publicURL} alt={data.web.name} />
            </div>
            <div className="max-w-380 md:max-w-424 mx-auto lg:w-269px h-full lg:mr-0 xl:ml-60px xxl:ml-112px txtc-lgtxtl">
              <p className="h-auto text-18 md:text-24 xl:text-26 font-display leading-125 md:leading-115 mt-30px lg:mt-65px mx-20px lg:mx-auto">
                Somos ágeis, metódicos e valorizamos a autonomia para entregar serviços com qualidade.
          </p>
              <div className="mx-20px xl:w-264px mt-30px lg:mt-40px mb-30px lg:mb-60px">
                <img className="w-148px md:w-245px lg:w-205px mxa-ha" src={data.tela.publicURL} alt={data.tela.name} />
                {
                  data.content.edges.map(({ node }) =>
                    <p key={node.frontmatter.title} className="md:w-full h-auto text-18 xl:text-14 font-display lg:leading-120 xl:leading-130 mt-35px xl:mt-49px">
                      {node.excerpt}
                    </p>
                  )
                }
                <a href="https://calendar.google.com/calendar/b/3?cid=Y29tZXJjaWFsQGNvZGVuZ2FnZS5jb20" rel="noopener" target="_blank" className="no-outline btn text-center block py-13px h-52px md:max-w-245 mx-auto xl:ml-3px mt-30px xl:mt-34px bg-cian-1 hover:bg-cian-3 font-semibold" >
                AGENDAR UMA REUNIÃO
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default Meeting;