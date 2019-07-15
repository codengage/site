import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
import SecTeam from "./subComponents/secTeam";
import SecSquad from "./subComponents/secSquad";
import SecJoinIn from "./subComponents/secJoinIn";
import SecInitial from "./subComponents/secInitial";
import SecContact from "./subComponents/secContact";
import SecMeeting from "./subComponents/secMeeting";
import SecPartners from "./subComponents/secPartners";
import SecCodengage from "./subComponents/secCodengage";
import SecTestimony from "./subComponents/secTestimony";

function Layout({ children }) {
  const [isScroll, toggleScroll] = useState(false);

  useEffect((isScroll) => {
    window.addEventListener('scroll', () => {
      if(window.innerWidth >= 1024) {
        window.pageYOffset >= 57.5 ?
          toggleScroll(true) :
          toggleScroll(false);
      } else {
        window.pageYOffset >= 8 ?
          toggleScroll(true) :
          toggleScroll(false);
      }
    })
  },[])

  return (
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
        <div className="bg-gray-1 flex flex-col font-display" >
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
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
