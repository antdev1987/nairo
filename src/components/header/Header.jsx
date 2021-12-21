import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import './rework.scss';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { FiUser, FiBriefcase, FiFileText, FiPhoneOutgoing } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';
// FaBlog

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      {/* Header */}
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? 'active' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header className={click ? 'header-left menu-open' : 'header-left '}>
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <Link to="/">MIRL</Link>
            </div>
          </div>
          {/* End htl-top */}

          <Scrollspy
            className="nav nav-menu"
            items={['home', 'about', 'runway', 'gallery', 'contactus']}
            currentClassName="active"
            offset={-30}>
            <li>
              <a className="nav-link " href="#home" data-tip data-for="HOME" onClick={handleClick}>
                <FaHome />
                <ReactTooltip id="HOME" place="top" type="dark" effect="float">
                  <span>Home</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about" data-tip data-for="ABOUT" onClick={handleClick}>
                <FiUser />
                <ReactTooltip id="ABOUT" place="top" type="dark" effect="float">
                  <span>About</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#runway" data-tip data-for="RUNWAY" onClick={handleClick}>
                <FiFileText />
                <ReactTooltip id="RUNWAY" place="top" type="dark" effect="float">
                  <span>runway</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#gallery" data-tip data-for="GALLERY" onClick={handleClick}>
                <FiBriefcase />
                <ReactTooltip id="GALLERY" place="top" type="dark" effect="float">
                  <span>Gallery</span>
                </ReactTooltip>
              </a>
            </li>
            {/* <li>
              <a className="nav-link" href="#blog" data-tip data-for="BLOG" onClick={handleClick}>
                <FaBlog />
                <ReactTooltip id="BLOG" place="top" type="dark" effect="float">
                  <span>Blog</span>
                </ReactTooltip>
              </a>
            </li> */}
            <li>
              <a className="nav-link" href="#contactus" data-tip data-for="CONTACT" onClick={handleClick}>
                <FiPhoneOutgoing />
                <ReactTooltip id="CONTACT" place="top" type="dark" effect="float">
                  <span>Contact</span>
                </ReactTooltip>
              </a>
            </li>
          </Scrollspy>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
