import React from "react";
import { graphql, StaticQuery } from "gatsby";

function Squad () {

  return (
    <StaticQuery
      query={graphql`
        query {
          rosto: file(name: {eq:"rosto"}, sourceInstanceName: {eq: "images"}) {
            name
            publicURL
          },
          icons: allFile(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "squad"}}) {
            nodes {
              name
              publicURL
            }
          },
          squad1: allMarkdownRemark(
            sort: {
              fields: [frontmatter___order]
              order: ASC }
            filter: { frontmatter: { id: { eq: "squad1" } }}
          ) {
            edges {
              node {
                excerpt(pruneLength: 250)
                frontmatter {
                  title
                  id
                  img
                  order
                }   
              }
            }
          },
          squad2: allMarkdownRemark(
            sort: {
              fields: [frontmatter___order]
              order: ASC }
            filter: { frontmatter: { id: { eq: "squad2" } }}
          ) {
            edges {
              node {
                excerpt(pruneLength: 250)
                frontmatter {
                  title
                  id
                  img
                  order
                }   
              }
            }
          },
        }
      `}
      render={(data) => (
        <section className="bg-white h-auto pb-10px md:pb-20px xl:pb-0">
          <div className="container mx-auto h-full pt-30px lg:pt-60px lg:max-w-980 xl:max-w-1110">
            <div className="lg:float-left md:w-203px xl:w-290px mxa-ha text-center xl:text-left">
              <h3 className="max-w-380 mx-auto text-28 md:text-34 lg:text-46 font-semibold leading-110 md:leading-115">Monte seu “Squad” profissional conosco:</h3>
              <img className="w-auto mt-35px md:mt-21px mx-auto xl:ml-60px xl:mr-0 mb-35px xl:mb-82px" src={data.rosto.publicURL} alt="rosto mulher" />
            </div>
            <div className="lg:float-right h-auto xl:w-734px xl:ml-86px lg:mb-60px leading-128 lg:leading-normal text-14 text-black-3 ">
              <div className="c-grid mx-20px lg:mx-0 md:float-left md:h-full lg:w-358px">
                {
                  data.squad1.edges.map(({ node }) =>
                    <div key={node.frontmatter.order} className="mw424-mxa xl:mx-0 mb-28px md:mb-15px xl:mb-35 inline-flex">
                      <span className="font-display pr-18px">
                        <span className="text-cian-1 text-18 md:text-26">{node.frontmatter.title}</span>&nbsp;{node.excerpt}
                      </span>
                      {
                        data.icons.nodes.map(({ name, publicURL }) =>
                          name === `icon_${node.frontmatter.img}`&& <img key={name} src={publicURL} alt={name} />
                        )
                      }
                    </div>
                  )
                }
              </div>
              <div className="c-grid mx-20px lg:mx-0 md:float-right md:h-full lg:w-358px">
                {
                  data.squad2.edges.map(({ node }) =>
                    <div key={node.frontmatter.order} className="mw424-mxa xl:mx-0 mb-28px md:mb-15px xl:mb-35 inline-flex">
                      <span className="font-display pr-18px">
                        <span className="text-cian-1 text-18 md:text-26">{node.frontmatter.title}</span>&nbsp;{node.excerpt}
                      </span>
                      {
                        data.icons.nodes.map(({ name, publicURL }) =>
                          name === `icon_${node.frontmatter.img}` && <img key={name} src={publicURL} alt={name} />
                        )
                      }
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default Squad;