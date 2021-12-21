import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonialAnimation.scss';

export default function SimpleSlider() {
  const TestimonilContent = [
    {
      Name: 'JLSM',
      desc: `The Designer`,
      list: [
        '1st Runner Up Harper’s Bazaar NewGen 2017',
        'Best Use Swarovski Crystals 2017',
        'Top 30 Finalists ID International Emerging Designer Awards, Dunedin',
        'Collaborated with H&M | 10 & More 2021',
        'Collaborated with We Bare Bears x TAFF SG 2021',
        'In Collaboration with SHEIN',
        'Commission for Singapore’s Largest Indoor Art Mural, GR.iD Mall',
      ],
      delayAnimation: '',
    },
    {
      Name: 'WX',
      desc: `The Architect`,
      list: [
        '15 years experience as creative developer, UX trainer and CTO / CPO',
        'Won awards at FWA, Cannes Lion, Creative Circle, Spikes and Webby',
        'Judge for The Crowbar Awards',
      ],
      delayAnimation: '100',
    },

    {
      Name: 'TONY',
      desc: `The Thinker`,
      list: [
        'Has more than 10 years of experience in the blockchain and crypto space',
        'Architect and built multiple blockchain and dApps',
        'Design and deployed DAO projects',
        'Governance and security management of crypto funds',
        'Expertise in game theory, economic theory, cybersecurity, artificial intelligence and blockchain applications',
      ],
      delayAnimation: '200',
    },
    {
      Name: 'MISLED LOTUS',
      desc: `The Terraformer`,
      list: [
        'Early bitcoin investor',
        'Experience in program management',
        `Worked with and managed several artists including JLSM on previous projects 
      `,
        'Experience in digital art design',
      ],
      delayAnimation: '300',
    },
    {
      Name: 'GEO',
      desc: `The Community Builder`,
      list: [
        'Community Builder since 2017',
        'MAYC Singapore community',
        'Led growth for multiple protocols and projects',
      ],
      delayAnimation: '400',
    },
    {
      Name: 'TUM',
      desc: `The Strategist`,
      list: [
        'Invested in 50 over crypto projects',
        'Build multiple blockchain and NFT marketplaces',
        'Previously tech entrepreneur with 2 exits',
        'Raised 300mil to date for companies and projects',
      ],
      delayAnimation: '500',
    },
  ];

  return (
    <div className="testimonial-wrapper testimonials-grid">
      {TestimonilContent.map((val, i) => (
        <div key={i} data-aos="fade-up" data-aos-duration="1200" data-aos-delay={val.delayAnimation}>
          <div className="testimonial-01 media">
            <div className="avatar">
              <img src={`img/testimonial/Team_${val.Name}.png`} alt="review comments"></img>
            </div>
            <div className="media-body">
              <h6>{val.Name}</h6>
              <span>{val.desc}</span>
              <ul>
                {val.list.map((item, idx) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
