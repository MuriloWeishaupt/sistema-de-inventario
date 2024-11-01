import React from 'react';

const LogoLink = ({ logoUrl, linkUrl, altText }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <img src={logoUrl} alt={altText} style={{ width: '400px', height: 'auto', position: 'absolute', top: '-160px', left: '-60px' }} />
    </a>
  );
};

export default LogoLink;
