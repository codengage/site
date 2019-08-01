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
          },
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
          },
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
          },
          background_full: file(name: {eq:"background_full"}, sourceInstanceName: {eq: "images"}) {
            name
            publicURL
          },
          icons: allFile(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "partners"}}) {
            nodes {
              name
              publicURL
            }
          },
        }
      `}
      render={data => (
        <section
          className="h-auto bg-cover"
          style={{ backgroundImage: `url(${data.background_full.publicURL})` }}
        >
          <div className="bg-black-2 h-full pt-30px lg:pt-40px">
            <Anchor id="clientes" />
            <div className="container mx-auto h-full xl:max-w-1110">
              <div className="sec-intro font-semibold mx-20px lg:leading-normal">
                <span className="text-white">Empresas que </span>
                <span className="text-cian-1">estão conosco.</span>
              </div>
              <div className="lg:max-w-980 xl:w-817px mx-auto text-center mt-25px mb-20px md:mb-40px lg:mb-53px">
                {data.partners.edges.map(({ node }) => (
                  <p key={node.frontmatter.title} className="txtc-14-18 text-white leading-tight mx-20px">
                    {node.excerpt}
                  </p>
                ))}
              </div>
              <div className="c-grid xl:max-w-1065 md:h-245px xl:h-342px ab-inv md-vis-rel pb-30px lg:pb-50px px-20px lg:px-40px xl:px-0">
                {data.partnersmd.edges.map(({ node }) => (
                  <div key={node.frontmatter.order} className="j-grid md:w-full">
                    {
                      data.icons.nodes.map(({ name, publicURL }) =>
                        name === node.frontmatter.first && <img className="md:w-135px" key={name} src={publicURL} alt={`icon ${name}`} />
                      )
                    }
                    {
                      data.icons.nodes.map(({ name, publicURL }) =>
                        name === node.frontmatter.second && <img className="md:w-135px" key={name} src={publicURL} alt={`icon ${name}`} />
                      )
                    }
                    {
                      data.icons.nodes.map(({ name, publicURL }) =>
                        name === node.frontmatter.third && <img className="md:w-135px" key={name} src={publicURL} alt={`icon ${name}`} />
                      )
                    }
                    {
                      data.icons.nodes.map(({ name, publicURL }) =>
                        name === node.frontmatter.fourth && <img className="md:w-135px" key={name} src={publicURL} alt={`icon ${name}`} />
                      )
                    }
                  </div>
                ))}
              </div>
              <div className="h-148px w-full md-ab-inv md:hidden flex mt-50px mb-32px">
                <macro-carousel loop pagination class="w-full">
                  {data.partnerssm.edges.map(({ node }) => (
                    <article key={node.frontmatter.order} className="w-full mb-30px mr-0">
                      <div className="w-full px-auto inline-flex justify-around">
                    {
                      data.icons.nodes.map(({ name, publicURL }) =>
                        name === node.frontmatter.first && <img className="w-150px" key={name} src={publicURL} alt={`icon ${name}`} />
                      )
                    }
                    {
                      data.icons.nodes.map(({ name, publicURL }) =>
                        name === node.frontmatter.second && <img className="w-150px" key={name} src={publicURL} alt={`icon ${name}`} />
                      )
                    }
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
