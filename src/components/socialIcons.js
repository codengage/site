import React from 'react';

function SocialIcons ({data}) {
  return (
    <>
      <a href="https://www.instagram.com/codengage_/" rel="noopener" target="_blank" className="no-outline">
        <img src={data.instagram.publicURL} alt={data.instagram.name} />
      </a>
      <a href="https://www.facebook.com/codengagecom/" rel="noopener" target="_blank" className="no-outline">
        <img src={data.facebook.publicURL} alt={data.facebook.name} />
      </a>
      <a href="https://www.linkedin.com/company/codengage" rel="noopener" target="_blank" className="no-outline">
        <img src={data.linkedin.publicURL} alt={data.linkedin.name} />
      </a>
    </>
  )
}

export default SocialIcons;
