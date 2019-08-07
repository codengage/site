module.exports = {
  siteMetadata: {
    title: `Codengage`,
    titleTemplate: ` - Outsourcing Tecnologia da Informação`,
    description: `Empresa de desenvolvimento de soluções de tecnologia da informação que alia os desafios com a capacidade de transformar idéias em grandes oportunidades de negócios. Offshore Outsourcing. Consultoria e projetos de software sob medida. Pesquisa, Inovação e Prototipação`,
    keywords: "tecnologia,informação,desenvolvimento,desenvolvedor,desenvolvedores,software,sistemas,mobile,aplicativos, soluções,eletrônica,hardware,ux,ui,design,dados,análise,uml,scrum,metodologias,java,php,dotnet,javascript,html,css,backend,frontend,projetos",
    url: "http://www.codengage.com/",
    author: `@CodengageTech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#04BFCB`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css']
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/components/content/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'icons',
        path: `${__dirname}/src/icons/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-96010824-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,

      },
    },
  ]
}
