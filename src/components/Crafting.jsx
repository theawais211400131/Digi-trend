import React from 'react'
import "./Crafting.css"
import video from "../assets/Videos/video_1.mp4"
function Crafting() {
  return (
    <div className="main_container mt-5">
        <div className="row">
            <div className="col-6">
            <h1 className='heading'>Crafting Digital <br /> Brilliance Explore <br /> Our Methodology</h1>
            <p className='text2'>I am Muhammad Awais, And i am here to build a demo of this website,
                I am just a student but love to work in MERN.
            </p>
            <button className='btn btn-success a'>Contact Us</button>
            </div>
            <div className="col-6">
         <video src={video} className='video' autoPlay loop muted></video>

            </div>
        </div>
    </div>
  )
}

export default Crafting