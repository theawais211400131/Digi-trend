import React, { useState } from 'react';
import "./OurPortfolio.css";
import image1 from "../assets/Pics/Portfolio/1.jpeg";
import image2 from "../assets/Pics/Portfolio/2.jpeg";
import image3 from "../assets/Pics/Portfolio/3.jpeg";
import image4 from "../assets/Pics/Portfolio/4.jpeg";
import image5 from "../assets/Pics/Portfolio/5.jpeg";
import image6 from "../assets/Pics/Portfolio/6.jpeg";
import image7 from "../assets/Pics/Portfolio/7.jpeg";

const images = [image1, image2, image3, image4, image5, image6, image7];

function OurPortfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3 mt-4">
          <h2 className='clients'>Our Portfolio</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-6 offset-3 mt-1">
          <p className='text'>
            This contains some of the pictures of our team members or anything related to us.
          </p>
        </div>
      </div>

      <div className="pictures">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`image${index + 1}`} 
            className={`pics ${selectedImage && selectedImage !== img ? 'blurred' : ''}`} 
            onClick={() => setSelectedImage(img)} 
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
}

export default OurPortfolio;
