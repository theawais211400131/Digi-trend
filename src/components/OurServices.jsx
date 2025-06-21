import React from 'react';
import "./OurServices.css";
import card1 from "../assets/Pics/card1.png";
import card2 from "../assets/Pics/02.jpg";
import card3 from "../assets/Pics/03.jpg";
import { ArrowForward } from "@mui/icons-material";

const services = [
  {
    title: "Digital Marketing",
    description: "We offer expert digital marketing services to grow your business and increase engagement.",
    image: card1,
  },
  {
    title: "SEO Services",
    description: "Improve your website’s ranking and visibility with our top-tier SEO services.",
    image: card2,
  },
  {
    title: "Web Development",
    description: "Get a stunning, responsive website designed by our expert web development team.",
    image: card3,
  }
];

function OurServices() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3 mt-4">
          <h2 className='clients'>Our Services</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-6 offset-3 mt-1">
          <p className='text'>
            At DigiTrend, we specialize in delivering cutting-edge digital solutions to help businesses grow. Our services include social media marketing.
          </p>
        </div>
      </div>

      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src={service.image} className="card-img-top" height={200}  alt={service.title} />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <a href="#" className="btn explore-btn d-flex justify-content-center">
  Explore <ArrowForward className="explore-icon"/>
</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
