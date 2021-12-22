import React from 'react';
import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

const SocialShare = [
  { Social: <FaInstagram />, link: 'https://www.instagram.com/mirlnft/' },
  { Social: <FaTwitter />, link: 'https://twitter.com/mirlnft' },
  { Social: <FaDiscord />, link: 'tbc' },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            If you’re still reading this, <span style={{ color: '#EF9037' }}>WAGMI</span>.
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
