import React from "react";
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
        <div className="bg-gray-1 flex flex-col font-display min-h-screen text-gray-900">
          <Header siteTitle={data.site.siteMetadata.title} />

          <SecInitial />
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
