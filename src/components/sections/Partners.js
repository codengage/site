import React from 'react'

import Slider from "react-slick";

import { StaticQuery, graphql } from 'gatsby'

import Anchor from '../anchor';

function Partners() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <></>,
    prevArrow: <></>
  };

  return (
    <StaticQuery
      query={graphql`
        query {
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
              <div className="sec-intro font-semibold mx-20px">
                <h2>
                  <span className="text-white">Empresas que </span>
                  <span className="text-cian-1">estão conosco.</span>
                </h2>
              </div>
              <div className="lg:max-w-980 xl:w-817px mx-auto text-center mt-25px mb-20px md:mb-40px lg:mb-53px">
                {data.partners.edges.map(({ node }) => (
                  <p key={node.frontmatter.title} className="txtc-14-18 text-white mx-20px">
                    {node.excerpt}
                  </p>
                ))}
              </div>
              <div className="c-grid p-disp lg:max-w-980 xl:max-w-1110 md:h-245px xl:h-342px ab-inv md-vis-rel pb-30px lg:pb-50px px-20px lg:px-0 lg:mx-auto">
                {data.partnersmd.edges.map(({ node }) => (
                  <div key={node.frontmatter.order} className="j-grid md:w-full">
                    {
                      data.icons.nodes.map(({ name, publicURL }) =>
                        name === node.frontmatter.first && <img className="md:w-135px lg:w-150px" key={name} src={publicURL} alt={`icon ${name}`} />
                      )
                    }
                    {
                      data.icons.nodes.map(({ name, publicURL }) =>
                        name === node.frontmatter.second && <img className="md:w-135px lg:w-150px" key={name} src={publicURL} alt={`icon ${name}`} />
                      )
                    }
                    {
                      data.icons.nodes.map(({ name, publicURL }) =>
                        name === node.frontmatter.third && <img className="md:w-135px lg:w-150px" key={name} src={publicURL} alt={`icon ${name}`} />
                      )
                    }
                    {
                      data.icons.nodes.map(({ name, publicURL }) =>
                        name === node.frontmatter.fourth && <img className="md:w-135px lg:w-150px" key={name} src={publicURL} alt={`icon ${name}`} />
                      )
                    }
                  </div>
                ))}
              </div>
              <Slider {...sliderSettings} className="h-73px md-ab-inv flex mt-50px mb-73px">
                {
                  data.partnerssm.edges.map(({ node }) => (
                    <div key={node.frontmatter.order} className="carousel no-outline w-full px-auto flex-row inline-flex justify-between sm:justify-around">
                      {
                        data.icons.nodes.map(({ name, publicURL }) =>
                          name === node.frontmatter.first && <img className="w-130px xs:w-150px" key={name} src={publicURL} alt={`icon ${name}`} />
                        )
                      }
                      {
                        data.icons.nodes.map(({ name, publicURL }) =>
                          name === node.frontmatter.second && <img className="w-130px xs:w-150px" key={name} src={publicURL} alt={`icon ${name}`} />
                        )
                      }
                    </div>
                  ))
                }
              </Slider>
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default Partners
