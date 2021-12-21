import React from 'react';
// import Header from '../../components/header/Header';
import Slider from '../../components/slider/SliderAnimation';
import About from '../../components/about/AboutAnimation';
import Resume from '../../components/resume/ResumeAnimation';
import Portfolio from '../../components/portfolio/PortfolioAnimation';
// import Blog from "../../components/blog/BlogAnimation";
// import Contact from '../../components/contact/Contact';
// import ContactInfo from '../../components/contact/ContactInfo';
// import Map from '../../components/contact/Map';
import Footer from '../../components/footer/FooterAnimation';
import useDocumentTitle from '../../components/useDocumentTitle';

const HomeOne = () => {
  useDocumentTitle('Nairo || Theme Dark Animation React Personal Portfolio Template');
  return (
    <div className="theme-dark">
      {/* <Header /> */}
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <Resume />
      {/* End Resume Section */}

      <section id="gallery" className="section theme-light dark-bg">
        <div className="container">
          <div className="title">
            <h3>My Gallery.</h3>
          </div>
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio Section */}

      {/* <section id="blog" className="section">
        <div className="container">
          <div className="title">
            <h3>Latest Blog.</h3>
          </div>
          <Blog />
        </div>
      </section> */}
      {/* End Portfolio Section */}

      <section id="contactus" className="section theme-light dark-bg">
        <div className="container">
        <div className="title">
            <h3>Contact Us.</h3>
          </div>
          <p>
            Our email is <a href="mailto:g@mirl.club ">g@mirl.club </a>
          </p>
        </div>
      </section>
      {/* End Contact Section */}

      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/* End Contact Section */}
    </div>
  );
};

export default HomeOne;
