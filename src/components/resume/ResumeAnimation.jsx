import React from 'react';
import video from './video.mp4';
// import Skills from '../skills/Skills';

const resumeContent = [
  {
    jobPosition: `2022 Q1 :`,
    jobType: `Genesis Drop`,
    list: [
      { txt: 'Physical Items Redemption' },
      { txt: 'Pop-up stores in 5 major cities' },
      { txt: 'Artist line-up for new collection' },
    ],
    delayAnimation: '',
  },
  {
    jobPosition: `2022 Q2 :`,
    jobType: `Experiences`,
    list: [
      { txt: 'Fashion trunk shows' },
      { txt: 'Metaverse fashion week 2022' },
      { txt: 'Launch of pop-up stores in 10 major cities' },
    ],
    delayAnimation: '100',
  },
  {
    jobPosition: `2022 Q3 :`,
    jobType: `Community`,
    list: [
      { txt: '$MIRL token launch' },
      { txt: 'Launch of wear-to-earn e-commerce store' },
      { txt: 'MIRL by invite app' },
    ],
    delayAnimation: '200',
  },
  {
    jobPosition: `2022 Q4 :`,
    jobType: `Domination`,
    list: [
      { txt: 'NFT holders owned fashion incubator' },
      { txt: 'Voting portal for NFT holders to vote on collabs and designs' },
    ],
    delayAnimation: '300',
  },
];

// const educatonContent = [
//   {
//     passingYear: '2018-2020',
//     degreeTitle: 'Ph.D in Horriblensess',
//     instituteName: 'University Of Evil Doing',
//   },
//   {
//     passingYear: '2013-2016',
//     degreeTitle: 'Bsc. in Computer Science',
//     instituteName: 'World University',
//   },
//   {
//     passingYear: '2010-2012',
//     degreeTitle: 'Graphic Artist Training ',
//     instituteName: 'Graphic Master Institute',
//   },
// ];

const Resume = () => {
  return (
    <>
      <section id="runway" className="section video">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="container">
          <div className="title title-pink">
            <h3>Runway</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h4>{val.jobPosition}</h4>
                      <h6>{val.jobType}</h6>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <ul className="rb-right">
                      {val.list.map((txt, idx) => (
                        <li key={idx}>{txt.txt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + 'img/border-dark.png'})`,
            }}></div> */}
          {/* End separated */}

          {/* <div className="title">
            <h3>Education & Skills</h3>{' '}
          </div> */}

          {/* <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb" data-aos="fade-up" data-aos-duration="1200">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{' '}
                  </li>
                ))}
              </ul>
            </div> */}
          {/* End .col */}

          {/* <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200">
              <Skills />
            </div> */}
          {/* End .col */}
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Resume;
