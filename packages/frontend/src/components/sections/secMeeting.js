import React from "react";
import { graphql, StaticQuery } from "gatsby";

function SecMeeting() {

  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(filter: { frontmatter: { title: { eq: "Meeting" } }}) {
            edges {
              node {
                excerpt
                frontmatter {
                  title
                }   
              }
            }
          }
        }
      `}
      render={data => (
        <section id="servicos" className="mxa-ha xl:max-w-1110">
          <div className="container h-full lg:inline-flex">
            <div className="w-auto md:w-546px lg:w-734-38px mxa-ha mt-30px lg:mt-59px mb-30px lg:mb-60px md:mb-0">
              <img className="mx-20px" src="/images/web.svg" alt="dev" />
            </div>
            <div className="max-w-380 md:max-w-424 mx-auto lg:w-269px h-full lg:mr-0 xl:ml-60px xxl:ml-111-63px txtc-lgtxtl">
              <p className="h-auto text-18 md:text-24 xl:text-26 font-display leading-125 md:leading-115 mt-30px lg:mt-65px mx-20px lg:mx-auto">
                Somos ágeis, metódicos e valorizamos a autonomia para entregar serviços com qualidade.
          </p>
              <div className="mx-20px xl:w-264px mt-30px lg:mt-40px mb-30px lg:mb-60px">
                <img className="w-148-26px md:w-245px lg:w-205-29px mxa-ha" src="/images/tela.svg" alt="" />
                {
                  data.allMarkdownRemark.edges.map(({ node }) =>
                    <p key={node.frontmatter.title} className="md:w-full h-auto text-18 xl:text-14 font-display lg:leading-120 xl:leading-130 mt-35px xl:mt-48-89px">
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

export default SecMeeting;