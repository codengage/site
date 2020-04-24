import { StaticQuery, graphql } from "gatsby";
import React from "react";

import Anchor from '../anchor';

function SecTestimony() {

  return (
    <StaticQuery
      query={graphql`
        query {
          photos: allFile(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "testmony"}}) {
            nodes {
              name
              publicURL
            }
          },
          testimony: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Testimony" } }}) {
            edges {
              node {
                excerpt(pruneLength: 200)
                frontmatter {
                  title
                }   
              }
            }
          },
          testimonys: allMarkdownRemark(
            sort: {
              fields: [frontmatter___order]
              order: ASC }
            filter: { frontmatter: { id: { eq: "testimony" } }}
          ) {
            edges {
              node {
                excerpt(pruneLength: 600)
                frontmatter {
                  title
                  company
                  id
                  img
                  order
                }   
              }
            }
          },
          arrow_left: file(sourceInstanceName: {eq: "icons"}, name: {eq: "testimony-left"}) {
            id
            publicURL
            name
          },
          arrow_right: file(sourceInstanceName: {eq: "icons"}, name: {eq: "testimony-right"}) {
            id
            publicURL
            name
          }
        }
      `}
      render={data => (
        <section className="h-full bg-white pt-30px lg:pt-40px pb-30px lg:pb-60px">
          <Anchor id="testemunho" />
          <div className="container mx-auto lg:max-w-980 xl:max-w-1110">
            <div className="mx-20px font-semibold text-34 md:text-46 lg:text-58 text-center">
              <h2>
                <span className="text-black-3">O que nossos clientes </span>
                <span className="text-cian-1">pensam de nós?</span>
              </h2>
            </div>
            <div className="xl:w-817px mx-auto text-center mt-30px lg:mt-25px lg:mb-53px">
              {
                data.testimony.edges.map(({ node }) =>
                  <p key={node.frontmatter.title} className="txtc-14-18 text-black-3 mx-20px">
                    {node.excerpt}
                  </p>
                )
              }
            </div>
            <div className="max-w-380 sm:max-w-full lg:justify-between w-full mxa-ha">
              {
                data.testimonys.edges.map(({ node }) =>
                  <div key={node.frontmatter.order} className="flex-wrap sm:flex-no-wrap sm:inline-flex h-auto mt-30px lg:mt-0 sm:content-between lg:py-25px mx-20px lg:mx-0">

                    {
                      data.photos.nodes.map(({ name, publicURL }) =>
                        name === node.frontmatter.img && <img width="50%" height="50%" className={`max-w-264 max-h-264 mx-auto sm:rounded-full ${node.frontmatter.order % 2 !== 0 ? "order-1 sm:float-left" : "order-3 sm:float-right"}`} key={name} src={publicURL} alt={`foto ${node.frontmatter.title}`} />
                      )
                    }
                    <img className="order-2 mt-60px absolute hidden md:relative md:flex" src={node.frontmatter.order % 2 !== 0 ? data.arrow_left.publicURL : data.arrow_right.publicURL} alt={node.frontmatter.order % 2 !== 0 ? data.arrow_left.name : data.arrow_right.name} />
                    <div className={`px-5px md:px-0 sm:my-auto ${node.frontmatter.order % 2 !== 0 ? "order-3 sm:float-right" : "order-1 sm:float-left"}`}>
                      <p className="text-14 lg:text-22 font-display text-center md:text-left mt-30px sm:mt-0  italic">{node.excerpt}</p>
                      <div className="w-auto font-semibold text-center md:text-left mt-20px mb-20px sm:mb-0">
                        <p className="text-16 lg:text-18 text-cian-1">{node.frontmatter.title}</p>
                        <p className="text-14 lg:text-16 text-black-3">{node.frontmatter.company}</p>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default SecTestimony;