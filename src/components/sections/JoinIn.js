import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Anchor from '../anchor';

function JoinIn() {

  return (
    <StaticQuery
      query={graphql`
        {
          coffee: file(name: {eq:"cafe"}, sourceInstanceName: {eq: "images"}) {
            name
            publicURL
          },
          content: allMarkdownRemark(filter: { frontmatter: { title: { eq: "JoinIn" } }}) {
            edges {
              node {
                excerpt(pruneLength: 250)
                frontmatter {
                  title
                }   
              }
            }
          },
        }
      `}
      render={data => (
        <section className="h-auto pt-30px md:pt-40px pb-30px lg:pb-60px">
          <Anchor id="talentos" />
          <div className="container mx-auto text-center font-semibold text-34 md:text-46 xl:text-58">
            <h2>
              <span className="text-black-3">Junte-se </span>
              <span className="text-cian-1">a nós.</span>
            </h2>
          </div>
          <div className="max-w-360 sm:max-w-424 lg:max-w-848 mxa-ha">
            <div className="mx-20px lg:inline-flex lg:w-full lg:justify-between">
              <div className="mx-auto lg:mx-0 lg:float-left w-138px md:w-162px mt-18px">
                <img src={data.coffee.publicURL} alt="coffee" />
              </div>
              <div className="lg:float-right lg:w-541px mt-30px lg:mt-48px flex lg:content-between flex-wrap">
                {
                  data.content.edges.map(({ node }) =>
                    <p key={node.frontmatter.title} className="txtc-14-18 txtc-lgtxtl">
                      {node.excerpt}
                    </p>
                  )
                }
                <a href="https://codengage.compleo.com.br/" target="_blank" rel="noopener" className="no-outline btn text-center py-13px h-52px md:w-245px mx-auto lg:ml-3px mt-20px lg:mt-0 bg-black-1 hover:bg-black-5 font-semibold" >
                  VAGAS ABERTAS
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default JoinIn;