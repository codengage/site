import React from "react";
import { graphql, StaticQuery } from "gatsby";

function Initial({ scroll }) {

  return (
    <StaticQuery
      query={graphql`
        {
           balanco: file(name: {eq:"balanco"}, sourceInstanceName: {eq: "images"}) {
             name
             publicURL
           },
           content: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Initial" } }}) {
             edges {
               node {
                 excerpt(pruneLength: 300)
                 frontmatter {
                   title
                 }   
               }
             }
            },
          #   hackathonImage: file(name: {eq:"codengage_nmd"}, sourceInstanceName: {eq: "images"}) {
          #     name
          #     publicURL
          #   },
          #   hackathonContent: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Initial" } }}) {
          #     edges {
          #       node {
          #         frontmatter {
          #           hackathonTitle
          #           hackathonTeam
          #           hackathonDesc
          #           hackathonLink
          #         }   
          #       }
          #     }
          #   }
          }
      `}
      render={data => (
        <section className={scroll ? "container mxa-ha initial mt-114px md:mt-154px lg:mt-225px xl:mt-298px mb-55px lg:mb-85px xl:mb-165px" : "container mxa-ha initial mt-55px lg:mt-85px xl:mt-165px mb-55px lg:mb-85px xl:mb-165px"}>
          <div className="mx-auto px-20px max-w-360 sm:max-w-380 md:max-w-546 lg:max-w-full">
            <div className="lg:float-left h-172px sm:h-209px md:h-307px lg:h-full mx-auto lg:mx-0 lg:max-w-424 xl:max-w-546">
            {/* <div className="lg:float-left h-240px sm:h-293px md:h-434px lg:h-full mx-auto lg:mx-0 lg:max-w-424 xl:max-w-546"> */}
              <img className="float-left" src={data.balanco.publicURL} alt={data.balanco.name} />
              {/* <img className="float-left" src={data.hackathonImage.publicURL} alt={data.hackathonImage.name} /> */}
            </div>
            <div className="lg:float-right mt-50px sm:mt-30px lg:mt-0 txtc-lgtxtl mx-auto max-w-320 sm:max-w-380 lg:max-w-452 xl:max-w-546 xl:pl-60px">
              <div className="h-auto w-full mx-auto lg:mx-0 font-semibold text-42 sm:text-48-97 lg:text-58">
              {/* <div className="h-auto w-full mx-auto lg:mx-0 font-semibold text-38 sm:text-46 md:text-51 lg:text-60 leading-none"> */}
                <h1>
                  <span className="text-black-1">Menos é </span>
                  <span className="text-cian-1">mais.</span>
                  {/* {
                    data.hackathonContent.edges.map(({ node }) =>
                      <>
                        <span className="text-black-1">{node.frontmatter.hackathonTitle} </span>
                        <span className="text-cian-1">{node.frontmatter.hackathonTeam}</span>
                      </>
                    )
                  } */}
                </h1>
              </div>
              <div className="lg-w-428 mx-auto lg:ml-3px mt-15px lg:mt-20px xl:mt-38px lg:mr-25px">
                {
                  data.content.edges.map(({ node }) =>
                    <p key={node.frontmatter.title} className="text-18 lg:text-24 xl:text-26 text-black-3 txtc-lgtxtl">
                      {node.excerpt}
                    </p>
                  )
                  // data.hackathonContent.edges.map(({ node }) =>
                  //   <p key={node.frontmatter.hackathonTeam} className="text-18 lg:text-24 xl:text-26 text-black-3 txtc-lgtxtl">
                  //     {node.frontmatter.hackathonDesc}
                  //   </p>
                  // )
                }
              </div>
              <a href="/#empresa" className="no-outline btn text-center block py-13px h-52px md:w-245px mt-30px xl:mt-40px lg:ml-3px mx-auto bg-cian-1 hover:bg-cian-3 font-semibold" >INICIAR NAVEGAÇÃO</a>
              {
                // data.hackathonContent.edges.map(({ node }) => 
                //   <a href={`${node.frontmatter.hackathonLink}`} rel="noopener" target="_blank" className="no-outline btn text-center block py-13px h-52px md:w-245px mt-30px xl:mt-40px lg:ml-3px mx-auto bg-cian-1 hover:bg-cian-3 font-semibold" >CONHEÇA O PROJETO</a>
                // )
              }
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default Initial;