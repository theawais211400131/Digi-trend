import React from 'react'
import "./Contactus.css"
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

function Contactus() {
  return (
    <div className="awais">
        <div className="container">
        <div className="row">
        <div className="col-6 offset-3 mt-4">
          <h2 className='clients'>Contact US</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-6 gu">
       <form >
        <input type='text' placeholder='First Name' className='form'/>   <input type='text' placeholder='Last Name' className='form'/> <br/>
        <input type='email' placeholder='Enter Email' className='formm'/> <br/>
        <textarea name='Message' rows={6} cols={50} placeholder='Message' className='form'/>
        <button className="button">Contact us</button>
       </form>
        </div>
        <div className="col-6">
         <div className="add">
         <p className='pata'><AddLocationIcon />Village chak gujran klan,HFD,PAK <br /><br /><br />
        <EmailIcon/> 211400131@gift.edu.pk <br /><br /><br /><PhoneIphoneIcon/> 03136471686 <br /><br /><br /><ContactPhoneIcon/> 03139192474</p>
         </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Contactus