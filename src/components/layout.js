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
  function closeCookie() {
    localStorage.setItem('cookie','declined')    
  }
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
            <Header scroll={isScroll} />
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
            <div className={localStorage.getItem('cookie') ? "hidden" : "w-full fixed bottom-3 px-20px"}>
              <div class="flex items-center justify-between w-full bg-black-1 shadow text-white py-20px px-20px rounded">
                <p>Footer Alert (Only use X to close)
                  <a href="https://www.linkedin.com/company/codengage" rel="noopener" target="_blank" class="no-outline">
                    <span class="font-bold text-18"> link1 </span>
                  </a>
                  asda askdj alksjd
                  <a href="https://www.linkedin.com/company/codengage" rel="noopener" target="_blank" class="no-outline">
                    <span class="font-bold text-18"> link2 </span>
                  </a>
                  asda askdj alksjd
                </p>
                  <button
                    className="no-outline btn text-center block py-13px h-52px md:max-w-245 mx-auto xl:ml-3px mt-30px xl:mt-34px bg-cian-1 hover:bg-cian-3 font-semibold order-3"
                    type="button"
                    onClick={e => closeCookie()}
                  >
                    close
                  </button>

              </div>
            </div>
          </div>
        )}
      />
    </>
  )
}

export default Layout
