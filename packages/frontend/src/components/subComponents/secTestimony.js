import { StaticQuery, graphql } from "gatsby";
import React, { useState } from "react";

function SecTestimony() {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(filter: { frontmatter: { title: { eq: "Testimony" } }}) {
            edges {
              node {
                excerpt(pruneLength: 200)
                frontmatter {
                  title
                }   
              }
            }
          }
        }
      `}
      render={data => (
        <section id="testemunho" className="h-full bg-white pt-30px lg:pt-40px pb-30px lg:pb-60px">
          <div className="container lg:max-w-1065 mx-auto">
            <div className="mx-20px font-semibold text-34 md:text-46 lg:text-58 xl:text-58 text-center leading-none lg:leading-normal">
              <span className="text-black-3">O que nossos clientes </span>
              <span className="text-cian-1">pensam de nós?</span>
            </div>
            <div className="lg:max-w-980 xl:w-817px mx-auto text-center mt-30px lg:mt-25px lg:mb-53-23px">
              {
                data.allMarkdownRemark.edges.map(({ node }) =>
                  <p key={node.frontmatter.title} className="text-14 md:text-18 font-display text-black-3 leading-tight mx-20px">
                    {node.excerpt}
                  </p>
                )
              }
            </div>
            <div className="max-w-380 sm:max-w-full lg:inline-flex lg:justify-between w-full h-auto mx-auto">
              <div className="sm:inline-flex lg:flex h-auto lg:w-307px mt-30px lg:mt-0 md:content-between lg:flex-wrap mx-20px">
                <img className="md:float-left w-full md:w-auto" src="/images/foto1.png" alt="foto Felix Rode" />
                <div className="px-5px md:float-right md:px-20px lg:px-0">
                  <p className="text-14 font-display text-center md:text-left leading-130 md:leading-105 mt-30px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="w-auto font-semibold text-center md:text-left mt-20px mb-20px lg:mb-0">
                    <p className="text-cian-1 text-16">Felix Rode</p>
                    <p className="text-14 text-black-3">CTO Editora Sanar</p>
                  </div>
                </div>
              </div>
              <div className="sm:inline-flex lg:flex h-auto lg:w-307px mt-30px lg:mt-0 md:content-between lg:flex-wrap mx-20px">
                <img className="md:float-left w-full md:w-auto" src="/images/foto2.png" alt="foto Samantha Firman" />
                <div className="px-5px md:float-right md:px-20px lg:px-0">
                  <p className="text-14 font-display text-center md:text-left leading-130 md:leading-105 mt-30px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="w-auto font-semibold text-center md:text-left mt-20px mb-20px lg:mb-0">
                    <p className="text-cian-1 text-16">Samantha Firman</p>
                    <p className="text-14 text-black-3">CEO Company</p>
                  </div>
                </div>
              </div>
              <div className="sm:inline-flex lg:flex h-auto lg:w-307px mt-30px lg:mt-0 md:content-between lg:flex-wrap mx-20px">
                <img className="md:float-left w-full md:w-auto" src="/images/foto3.png" alt="foto Samantha Firman" />
                <div className="px-5px md:float-right md:px-20px lg:px-0">
                  <p className="text-14 font-display text-center md:text-left leading-130 md:leading-105 mt-30px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="w-auto font-semibold text-center md:text-left mt-20px mb-20px lg:mb-0">
                    <p className="text-cian-1 text-16">Samantha Firman</p>
                    <p className="text-14 text-black-3">CEO Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default SecTestimony;