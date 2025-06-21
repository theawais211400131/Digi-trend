import React from 'react'
import "./Clients.css"
import image2 from "../assets/Pics/Airbnb.png"
import image3 from "../assets/Pics/spotify.png"
function Client() {
  return (
   <div className="container">
    <div className="row">
        <div className="col-6 offset-3 mt-4">
            <h2 className='clients'>OUR CLIENTS</h2>
        </div>
    </div>
    <div className="row">
    <div className="col-6 offset-3 mt-1">
            <p className='text'>Our clients are the campanies which are always available for us in every dark night</p>
        </div>
    </div>
    <div className="row mt-5 last">
        <div className="col-3">
       <img src={image2} alt="image2" className='Airbnb'  />
        </div>
        <div className="col-3">
            <h1 className='github'>GITHUB</h1>
        </div>
        <div className="col-3">
        <img src={image3} alt="image2" className='Airbnb' />
        </div>
        <div className="col-3">
        <h1 className='husky'>HUSKY</h1>
        </div>
    </div>
   </div>
  )
}

export default Client