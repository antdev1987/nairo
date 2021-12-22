import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonialAnimation.scss';
import { FaTwitter } from 'react-icons/fa';

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
      twitter: 'https://twitter.com/butilovetonap',
      web: 'https://joannalsm.com/',
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
      twitter: 'https://twitter.com/0xG30',
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
      twitter: 'https://twitter.com/epicsuperstar',
      web: 'https://oncyber.io/mintable',
      delayAnimation: '500',
    },
  ];

  return (
    <div className="testimonial-wrapper testimonials-grid">
      {TestimonilContent.map((val, i) => (
        <div key={i} data-aos="fade-up" data-aos-duration="1200" data-aos-delay={val.delayAnimation}>
          <div className="testimonial-01 media">
            <div className="av">
              <img src={`img/testimonial/Team_${val.Name}.png`} alt="review comments"></img>
              <ul style={{ color: 'white' }}>
                <li>
                  <a href={val.twitter}>
                    <FaTwitter />
                  </a>
                </li>
                {val.web && (
                  <li>
                    <a href={val.web}>
                      <i class="fas fa-globe"></i>
                    </a>
                  </li>
                )}
              </ul>
            </div>
            <div className="media-body">
              <main className="media-content">
                <h6>{val.Name}</h6>
                <span>{val.desc}</span>
              </main>
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
