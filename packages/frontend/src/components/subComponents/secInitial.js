import PropTypes from "prop-types";
import React, { useState } from "react";
import { graphql, StaticQuery } from "gatsby";

function secInitial({ scroll }) {

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
        <section className={scroll ? "container mt-114px lg:mt-245px mb-30px lg:mb-80px xl:mb-159px lg:w-974px xxl:w-1111px h-auto mx-auto" : "container mt-54-14px lg:mt-85px xl:mt-164-23px mb-30px lg:mb-80px xl:mb-159px lg:w-974px xxl:w-1111px h-auto mx-auto"}>
          <div className="mx-20px">
            <div className="lg:float-left max-w-288 md:max-w-350 lg:max-w-452 xxl:w-546-11px h-172-34px md:h-209-42px lg:h-full mx-auto lg:mx-0">
              <img className="float-left" src="/images/balanco.svg" alt="Menos é mais" />
            </div>
            <div className="lg:float-right xl:w-456px mt-50px lg:mt-0 text-center lg:text-left">
              <div className="h-51px xl:h-79px w-298px md:w-369px lg:w-auto mx-auto lg:mx-0 font-semibold text-48-97 md:text-58 lg:text-78 leading-none">
                <span className="text-black-1">Menos é </span>
                <span className="text-cian-1">mais.</span>
              </div>
              <div className="w-296px lg:w-428px h-85px lg:h-126px mx-auto lg:ml-3px mt-15px lg:mt-38px lg:mr-25px">
                {
                  data.allMarkdownRemark.edges.map(({ node }) =>
                    <p key={node.frontmatter.title} className="text-18 lg:text-26 text-center lg:text-left leading-120 lg:leading-normal text-black-3 leading-tight">
                      {node.excerpt}
                    </p>
                  )
                }
              </div>
              <div className="h-52px max-w-320 lg:w-245px mt-30px xl:mt-55px lg:ml-3px mx-auto left-0">
                <button className="w-full h-full bg-cian-1 hover:bg-cian-3 text-18 text-white font-semibold rounded">
                  INICIAR NAVEGAÇÃO
            </button>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default secInitial;