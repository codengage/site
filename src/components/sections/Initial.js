import React from "react";
import { graphql, StaticQuery } from "gatsby";

function Initial({ scroll }) {

  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(filter: { frontmatter: { title: { eq: "Initial" } }}) {
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
        <section className={scroll ? "container mxa-ha initial mt-114px md:mt-154px lg:mt-225px xl:mt-298px" : "container mxa-ha initial mt-54-14px lg:mt-85px xl:mt-164-23px"}>
          <div className="mx-20px">
            <div className="lg:float-left max-w-288 md:max-w-350 lg:max-w-452 xxl:max-w-546 h-172-34px md:h-209-42px lg:h-full mx-auto lg:mx-0">
              <img className="float-left" src="/balanco.svg" alt="Menos é mais" />
            </div>
            <div className="lg:float-right mt-50px lg:mt-0 txtc-lgtxtl">
              <div className="h-51px lg:h-60px xl:h-79px w-280px xs:w-298px initial-xs mx-auto lg:mx-0 font-semibold text-46 xs:text-48-97 leading-none">
                <span className="text-black-1">Menos é </span>
                <span className="text-cian-1">mais.</span>
              </div>
              <div className="w-280px xs:w-296px lg-w-428 h-85px lg:h-107px xl:h-126px mx-auto lg:ml-3px mt-15px lg:mt-20px xl:mt-38px lg:mr-25px">
                {
                  data.allMarkdownRemark.edges.map(({ node }) =>
                    <p key={node.frontmatter.title} className="text-18 lg:text-26 text-black-3 txtc-lgtxtl leading-120 lg:leading-110">
                      {node.excerpt}
                    </p>
                  )
                }
              </div>
              <a href="/#empresa" className="no-outline btn text-center block py-13px h-52px max-w-320 lg:w-245px mt-30px xl:mt-40px lg:ml-3px mx-auto bg-cian-1 hover:bg-cian-3 font-semibold" >INICIAR NAVEGAÇÃO</a>
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default Initial;