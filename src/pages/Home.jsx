import React from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import image1 from "../assets/Pics/01.png"

const Home = () => {
  return (
    <section className="hero__sahape">
      <div className="container">
        <Navbar />
        <div className="row mt-5 px-3">
          <div className="col-6">
           <h2 className="hero_heading mt-4">Your Trusted Digital <span className="Agency">Agency</span> Partner</h2>
           <p className="hero_subtext mt-4"> Your bussiness will be proved FBR registerd oneday inshallah

           </p>
           <button className="btn_1 mt-4">Get Started</button>
           <button className="btn_2 mt-4">Explore More</button>
          </div>
          <div className="col-6">
          <img src={image1} alt="image1" className="hero_image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;