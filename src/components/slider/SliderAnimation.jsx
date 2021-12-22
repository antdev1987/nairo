import React from 'react';
import video from './video.mp4';

const sliderContent = {
  welcome: 'WELCOME TO MIRL',
  description: 'MIRL is the first decentralised fashion brand born in the metaverse.',
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner video">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="hb-top-fixed d-flex ">
          <div className="hb-lang">
            <ul className="nav">
              <li>
                <a href="https://www.instagram.com/mirlnft/">
                  <i class="fab fa-instagram fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/mirlnft">
                  <i class="fab fa-twitter fa-2x"></i>
                </a>
              </li>
              {/* <li>
                <a href="tc">
                  <i class="fab fa-discord fa-2x"></i>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="" style={{ height: '100vh',paddingLeft: "10px"  }}>
          <div className="row full-screen">
            <div className="flexcenter" style={{ width: '70%', }}>
              <div className="type-box">
                <h6 className="font-size-medium" data-aos="fade-up" data-aos-duration="1200">
                  Hello...
                </h6>
                <h1 className="font-alt" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                  {sliderContent.welcome}
                </h1>

                <p
                  className="font-size-medium"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                  style={{ fontSize: '20px' }}>
                  {sliderContent.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
