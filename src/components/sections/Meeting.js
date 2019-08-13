import React from "react";
import { graphql, StaticQuery } from "gatsby";

function Meeting() {

  return (
    <StaticQuery
      query={graphql`
        {
          web: file(name: {eq:"web"}, sourceInstanceName: {eq: "images"}) {
            name
            publicURL
          },
          tela: file(name: {eq:"tela"}, sourceInstanceName: {eq: "images"}) {
            name
            publicURL
          },
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
        }
      `}
      render={data => (
        <section className="mxa-ha xl:max-w-1110 lg:max-h-677 pt-30px pb-30px lg:pt-60px lg:pb-60px">
          <div className="container h-full lg:inline-flex lg:justify-between xl:w-1111px">
            <div className="w-auto md:w-546px lg:w-700px mxa-ha lg:mx-0">
              <img className="mx-20px md:mx-0 h-full" src={data.web.publicURL} alt={data.web.name} />
            </div>
            <div className="max-w-380 md:max-w-424 mx-auto lg:w-269px h-full lg:mr-0 xl:ml-60px xxl:ml-112px txtc-lgtxtl mt-30px lg:mt-0 lg:mb-0">
              <p className="h-auto text-18 md:text-24 xl:text-26 font-display mx-20px lg:mx-auto">
                Somos ágeis, metódicos e valorizamos a autonomia para entregar serviços com qualidade.
              </p>
              <div className="mx-20px xl:w-264px mt-30px lg:mt-40px flex-wrap">
                <img className="w-148px md:w-245px lg:w-205px mxa-ha order-1" src={data.tela.publicURL} alt={data.tela.name} />
                {
                  data.content.edges.map(({ node }) =>
                    <p key={node.frontmatter.title} className="md:w-full h-auto text-18 xl:text-14 font-display mt-35px xl:mt-49px order-2">
                      {node.excerpt}
                    </p>
                  )
                }
                <a href="https://calendar.google.com/calendar/b/3?cid=Y29tZXJjaWFsQGNvZGVuZ2FnZS5jb20" rel="noopener" target="_blank" className="no-outline btn text-center block py-13px h-52px md:max-w-245 mx-auto xl:ml-3px mt-30px xl:mt-34px bg-cian-1 hover:bg-cian-3 font-semibold order-3" >
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