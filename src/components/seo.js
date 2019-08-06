import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description

        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={`${data.site.siteMetadata.title}${data.site.siteMetadata.titleTemplate}` }
            // titleTemplate={data.site.siteMetadata.titleTemplate}
            meta={[
              {
                name: `author`,
                content: data.site.siteMetadata.author
              },
              {
                name: `image`,
                content: data.image.publicURL
              },
              {
                name: `keywords`,
                content: data.site.siteMetadata.keywords
              },
              {
                name: `description`,
                content: metaDescription
              },
              {
                name: `og:image`,
                content: data.image.publicURL
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: title
              },
              {
                name: `twitter:description`,
                content: metaDescription
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  titleTemplate: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        titleTemplate
        description
        keywords
        author
        title
      }
    }
    image: file(name: {eq:"bg"}, sourceInstanceName: {eq: "images"}) {
      name
      publicURL
    },
  }
`
