import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import Anchor from '../anchor';

if (typeof window !== `undefined`) {
  require('macro-carousel')
}

function Partners() {
  return (
    <StaticQuery
      query={graphql`
        query {
          partners: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Partners" } } }) {
            edges {
              node {
                excerpt(pruneLength: 250)
                frontmatter {
                  title
                }
              }
            }
          }
          partnerssm: allMarkdownRemark(
            sort: { fields: [frontmatter___order], order: ASC }
            filter: { frontmatter: { id: { eq: "partners-sm" } } }
          ) {
            edges {
              node {
                frontmatter {
                  order
                  first
                  second
                }
              }
            }
          }
          partnersmd: allMarkdownRemark(
            sort: { fields: [frontmatter___order], order: ASC }
            filter: { frontmatter: { id: { eq: "partners-md" } } }
          ) {
            edges {
              node {
                frontmatter {
                  order
                  first
                  second
                  third
                  fourth
                }
              }
            }
          }
        }
      `}
      render={data => (
        <section
          className="h-auto bg-cover"
          style={{ backgroundImage: 'url(/images/background_full.svg)' }}
        >
          <div className="bg-black-1 opacity-95 h-full pt-30px lg:pt-40px">
            <Anchor id="clientes" />
            <div className="container mx-auto h-full xl:max-w-1110">
              <div className="sec-intro font-semibold mx-20px lg:leading-normal">
                <span className="text-white">Empresas que </span>
                <span className="text-cian-1">estão conosco.</span>
              </div>
              <div className="lg:max-w-980 xl:w-817px mx-auto text-center mt-25px mb-20px md:mb-40px lg:mb-53-23px">
                {data.partners.edges.map(({ node }) => (
                  <p key={node.frontmatter.title} className="txtc-14-18 text-white leading-tight mx-20px">
                    {node.excerpt}
                  </p>
                ))}
              </div>
              <div className="c-grid xl:max-w-1065 md:h-245px xl:h-341-79px ab-inv md-vis-rel pb-30px lg:pb-50px px-20px lg:px-40px xl:px-0">
                {data.partnersmd.edges.map(({ node }) => (
                  <div key={node.frontmatter.order} className="j-grid md:w-full">
                    <img
                      className="md:w-135px"
                      src={`/images/${node.frontmatter.first}.svg`}
                      alt={`icon ${node.frontmatter.first}`}
                    />
                    <img
                      className="md:w-135px"
                      src={`/images/${node.frontmatter.second}.svg`}
                      alt={`icon ${node.frontmatter.second}`}
                    />
                    <img
                      className="md:w-135px"
                      src={`/images/${node.frontmatter.third}.svg`}
                      alt={`icon ${node.frontmatter.third}`}
                    />
                    <img
                      className="md:w-135px"
                      src={`/images/${node.frontmatter.fourth}.svg`}
                      alt={`icon ${node.frontmatter.fourth}`}
                    />
                  </div>
                ))}
              </div>
              <div className="h-148px w-full md-ab-inv flex mt-50px mb-32px">
                <macro-carousel loop pagination class="w-full">
                  {data.partnerssm.edges.map(({ node }) => (
                    <article key={node.frontmatter.order} className="w-full mb-30px mr-0">
                      <div className="w-full px-auto inline-flex justify-around">
                        <img
                          className="w-150px"
                          src={`/images/${node.frontmatter.first}.svg`}
                          alt={`icon ${node.frontmatter.first}`}
                        />
                        <img
                          className="w-150px"
                          src={`/images/${node.frontmatter.second}.svg`}
                          alt={`icon ${node.frontmatter.second}`}
                        />
                      </div>
                    </article>
                  ))}
                </macro-carousel>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default Partners
