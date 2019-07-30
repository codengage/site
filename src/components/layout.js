import React, { useState, useEffect } from 'react'

import { StaticQuery, graphql } from 'gatsby'

import SEO from './seo'
import Header from './header'
import Footer from './footer'
import SecTeam from './sections/secTeam'
import SecSquad from './sections/secSquad'
import SecJoinIn from './sections/secJoinIn'
import SecInitial from './sections/secInitial'
import SecContact from './sections/secContact'
import SecMeeting from './sections/secMeeting'
import SecPartners from './sections/secPartners'
import SecCodengage from './sections/secCodengage'
import SecTestimony from './sections/secTestimony'

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
            <SecInitial scroll={isScroll} />
            <SecCodengage />
            <SecTeam />
            <SecSquad />
            <SecMeeting />
            <SecPartners />
            <SecTestimony />
            <SecJoinIn />
            <SecContact />

            <Footer />
          </div>
        )}
      />
    </>
  )
}

export default Layout
