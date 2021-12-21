import React from 'react';
import './About.scss';
// import Services from '../service/ServiceAnimation';
// import Awards from '../award/AwardsAnimation';

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="flexcenter aboutSection" style={{ background: 'url(./img/world.png) right center / cover' }}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1200">
                <div className="about-me">
                  <div className="img">
                    <div className="img-in">
                      <img src="img/about/MIRL.jpg" alt="about" />
                    </div>
                  </div>
                  {/* End img */}
                </div>
                {/* End about-me */}
              </div>
              {/* End col */}
              <div className="col-lg-7 ml-auto" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                <div className="about-info">
                  <div className="title">
                    <h3>Genesis MIRL - S/S 2022</h3>
                  </div>
                  <div className="about-text">
                    <p>
                      MIRL™ pioneers the FashionFi movement that infuses the fashion industry with the advent of NFTs
                      and DeFi.
                    </p>
                    <p>
                      We are a brand with an ethos of the future, representing a new world culture that connects
                      like-minded individuals.
                    </p>
                    <p>
                      All MIRL™ will unlock exclusive access to seasonal physical wearables and privileges through our
                      IRL partners.
                    </p>
                  </div>
                </div>
              </div>
              {/* End col */}
            </div>
          </div>
        </div>

        {/* separated */}

        <div
          className="separated"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + 'img/border-dark.png'})`,
          }}></div>
      </section>
    </>
  );
};

export default About;
