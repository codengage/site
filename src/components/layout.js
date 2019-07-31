import React, { useState, useEffect } from 'react'

import { StaticQuery, graphql } from 'gatsby'

import SEO from './seo'
import Header from './header'
import Footer from './footer'
import Team from './sections/Team'
import Squad from './sections/Squad'
import JoinIn from './sections/JoinIn'
import Initial from './sections/Initial'
import Contact from './sections/Contact'
import Meeting from './sections/Meeting'
import Partners from './sections/Partners'
import Codengage from './sections/Codengage'
import Testimony from './sections/Testimony'

function Layout() {
  const [isScroll, toggleScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.innerWidth >= 1024) {
        window.pageYOffset >= 55 ? toggleScroll(true) : toggleScroll(false)
      } else if (window.innerWidth >= 768) {
        window.pageYOffset >= 45 ? toggleScroll(true) : toggleScroll(false)
      } else {
        window.pageYOffset >= 8 ? toggleScroll(true) : toggleScroll(false)
      }
    })
  }, [])

  return (
    <>
      <SEO title="Codengage" lang="pt-BR" />

      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div className="bg-gray-1 flex flex-col font-display">
            <Header siteTitle={data.site.siteMetadata.title} scroll={isScroll} />
            <Initial scroll={isScroll} />
            <Codengage />
            <Team />
            <Squad />
            <Meeting />
            <Partners />
            <Testimony />
            <JoinIn />
            <Contact />

            <Footer />
          </div>
        )}
      />
    </>
  )
}

export default Layout
