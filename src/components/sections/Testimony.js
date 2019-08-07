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
            <div className="max-w-380 sm:max-w-full lg:inline-flex lg:justify-between w-full mxa-ha">
              {
                data.testimonys.edges.map(({ node }) =>
                  <div key={node.frontmatter.order} className="flex-wrap sm:flex-no-wrap sm:inline-flex h-auto lg:w-307px mt-30px lg:mt-0 sm:content-between lg:content-start lg:flex-wrap mx-20px lg:mx-0">

                    {
                      data.photos.nodes.map(({ name, publicURL }) =>
                        name === node.frontmatter.img && <img width="50%" height="50%" className="sm:max-w-300 w-full mx-auto sm:float-left order-1" key={name} src={publicURL} alt={`foto ${node.frontmatter.title}`} />
                      )
                    }
                    <div className="px-5px sm:float-right md:pl-40px md:pr-0 lg:px-0 order-2">
                      <p className="text-14 font-display text-center md:text-left mt-30px">{node.excerpt}</p>
                      <div className="w-auto font-semibold text-center md:text-left mt-20px mb-20px lg:mb-0">
                        <p className="text-16 text-cian-1">{node.frontmatter.title}</p>
                        <p className="text-14 text-black-3">{node.frontmatter.company}</p>
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