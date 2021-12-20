import React from 'react';

const sliderContent = {
  welcome: (
    <>
      WELCOME <br></br> TO MIRL
    </>
  ),
  description: (
    <>
      MIRL is the first decentralised fashion <br></br> brand born in the metaverse.
    </>
  ),
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
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
              <li>
                <a href="tc">
                  <i class="fab fa-discord fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
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
        <div
          className="hb-me"
          style={{
            background: `url('img/slider/Home Banner_2.jpg') bottom center / cover`,
          }}></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
