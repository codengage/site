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
        <section id="servicos" className="h-auto xl:max-w-1110 mx-auto">
          <div className="container h-full lg:inline-flex">
            <div className="w-auto md:w-546px lg:w-734-38px h-auto mt-30px lg:mt-59px mb-30px lg:mb-60px md:mb-0 mx-auto">
              <img className="mx-20px" src="/images/web.svg" alt="dev" />
            </div>
            <div className="max-w-380 md:max-w-424 lg:w-269px h-full mx-auto lg:mr-0 xl:ml-60px xxl:ml-111-63px text-center lg:text-left">
              <p className="h-auto text-18 md:text-24 xl:text-26 font-display leading-125 md:leading-115 mt-30px lg:mt-65px mx-20px lg:mx-auto">
                Somos ágeis, metódicos e valorizamos a autonomia para entregar serviços com qualidade.
          </p>
              <div className="mx-20px lg:w-264px mt-30px lg:mt-40px mb-30px lg:mb-60px">
                <img className="w-148-26px md:w-245px lg:w-205-29px h-auto mx-auto" src="/images/tela.svg" alt="" />
                {
                  data.allMarkdownRemark.edges.map(({ node }) =>
                    <p key={node.frontmatter.title} className="md:w-full h-auto text-18 xl:text-14 font-display leading-130 mt-35px lg:mt-48-89px">
                      {node.excerpt}
                    </p>
                  )
                }
                <button className="h-52px w-full md:w-245px mt-34px bg-cian-1 hover:bg-cian-3 text-18 text-white font-semibold rounded">
                  AGENDAR UMA REUNIÃO
            </button>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default SecMeeting;