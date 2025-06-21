import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
  return (
    <div>
      <div className="container_min">
        <div className="row">
         
          <div className="col-5">
            <h1 className="h1">DIGITREND</h1>
            <p className="h1p">
              DigiTrend is your go-to digital solutions provider, offering cutting-edge services in digital marketing, 
              SEO, and web development. We help businesses grow by enhancing their online presence, driving engagement, 
              and delivering innovative strategies tailored to their needs.
            </p>
            
            <div className="social-icons">
  <a href="https://www.facebook.com/profile.php?id=61574226422773" target="_blank" rel="noopener noreferrer">
    <FacebookIcon className="icon" />
  </a>
  <a href="https://www.instagram.com/awaiscoder786/" target="_blank" rel="noopener noreferrer">
    <InstagramIcon className="icon" />
  </a>
  <a href="https://github.com/settings/profile" target="_blank" rel="noopener noreferrer">
    <GitHubIcon className="icon" />
  </a>
</div>
          </div>

          <div className="col-1"></div>

        
          <div className="col-2">
            <h3 className="h3">Services</h3><br />
            <p className="h3p">
              SEO <br /><br />
              Email Marketing <br /><br />
              Digital Marketing <br /><br />
              Content Writing
            </p>
          </div>

         
          <div className="col-2">
            <h3 className="h3">Packages</h3><br />
            <p className="h3p">
              Basic <br /><br />
              Premium <br /><br />
              Diamond <br /><br />
              Platinum
            </p>
          </div>

        
          <div className="col-2">
            <h3 className="h3">About</h3><br />
            <p className="h3p">
              Digital Agency <br /><br />
              Explore <br /><br />
              Contact <br /><br />
              Career
            </p>
          </div>
        </div>
      </div>

      
      <div className="develper">
        <p className="M">Design by M.Awais</p>
      </div>
    </div>
  );
}

export default Footer;
