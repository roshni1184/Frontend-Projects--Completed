import React from 'react'
import "./Footer.css"
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import music from '../../assets/music.png'
import video from '../../assets/video.png'


const Footer = () => {
  return (
    <div className='footer-parent'>
      <div className="upper-footer-portion">
        <div className="logo">
          <h1>LOGO</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure consectetur aut perferendis. Nesciunt sunt ad culpa quia doloremque modi provident ab? Obcaecati voluptas architecto perspiciatis quis totam adipisci minus?
          </p>
        </div>
        <div className="quick-links">
          <h4>Quick Links</h4>
          <p>Consultants</p>
          <p>Institutes</p>
          <p>Testimonials</p>
          <p>Blog</p>
          <p>Become a Consultant</p>
        </div>
        <div className="contact-us">
          <h4>Contact Us</h4>
          <p>+123 4567 897</p>
          <p>support@gmail.com</p>
        </div>
      </div>
      <hr style={{marginLeft:"140px", marginRight:"140px"}} className='hr-line'></hr>
      <div className="middle-footer-portion">

        <div className="immigration-consultant">
          <h4>Immigration Consultant</h4>
          <div className='immigration-consultant-left'>
            <div className="consultant-part1">
              <p>immigration consultant near me</p>
              <p>immigration consultant Mohali</p>
              <p>immigration consultant Chandigarh</p>
              <p>immigration consultant Batinda</p>
              <p>immigration consultant Amritsar</p>
              <p>immigration consultant Barnala</p>
              <p>immigration consultant Faridkot</p>
            </div>
            <div className="consultant-part2">
              <p>immigration consultant Kotakpur</p>
              <p>immigration consultant Shimla </p>
              <p>immigration consultant Manali</p>
              <p>immigration consultant Kasoli  </p>
              <p>immigration consultant Dharampur</p>
              <p>immigration consultant Mansoori</p>
              <p>immigration consultant Kasol</p>
            </div>
          </div>

        </div>
        <div className="Training-institutes">
          <h4>Training Institutes</h4>
          <div className='Training-right'>
            <div className="institute-part1">
              <p>Training Institutes near me</p>
              <p>Training Institutes Mohali </p>
              <p>Training Institutes Chandigarh</p>
              <p>Training Institutes Batinda</p>
              <p>Training Institutes Amritsar</p>
              <p>Training Institutes Barnala</p>
              <p>Training Institutes Faridkot</p>
            </div>
            <div className="institute-part2">
              <p>Training Institutes Kotakpur</p>
              <p>Training Institutes Shimla</p>
              <p>Training Institutes Manali</p>
              <p>Training Institutes Kasoli</p>
              <p>Training Institutes Dharampur</p>
              <p>Training Institutes Mansoori</p>
              <p>Training Institutes Kasol</p>
            </div>
          </div>

        </div>
      </div>
      <hr style={{marginLeft:"140px", marginRight:"140px"}} className='hr-line'></hr>
      <div className='lower-footer-portion'>
        <div className="footer-icons">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={music} alt="" />
          <img src={video} alt="" />


        </div>

      </div>
      <div className='last-p'>
        <p>All Rights Reserved By Chownk</p>
      </div>

    </div>
  )
}

export default Footer
