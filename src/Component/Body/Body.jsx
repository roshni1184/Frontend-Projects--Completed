import React from 'react'
import "./Body.css"
import mg1 from '../../assets/mg1.png'
import mg2 from '../../assets/mg2.png'
import mg3 from '../../assets/mg3.png'
import mg4 from '../../assets/mg4.png'
import mg5 from '../../assets/mg5.png'
import mg6 from '../../assets/mg6.png'
import msgv from '../../assets/msgv.png'
import { FaStar, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < rating ? <FaStar color="gold" /> : <FaRegStar color="gray" />}
        </span>
      ))}
    </div>
  );
};

const Body = () => {
  return (
    <>
      <div className='cont1' >
        <div className='Left'>
          <h2><b>Top Rated Consultants</b></h2>
          <br></br>
          <h3 style={{ fontWeight: "normal", marginTop: "5px" }}>Our trusted partner in navigation
            the immigration journey</h3>
          <br></br>
          <button className='Left-btn' style={{ fontWeight: "normal", marginTop: "15px" }}> View All</button>
        </div>
    
          <div className='Right'>
            <div className='Box1'>
              <img src={mg1} alt="" />
              <br></br>
              <h3>Visa Masters</h3>
              <br></br>
              <Rating rating={5} />
              <br></br>
              <p>Lorem Ipsum is simply dummy
                text for printing.</p>

              <div className="dollar">
                <div className="dollar-left">
                  <button className='btn'>$15.00/ 15 min</button>
                </div>
                <div className="dollar-right">
                  <img src={msgv} alt="Message Icon" className="msg-image" />
                  <span>Message</span>

                </div>

              </div>

            </div>
            <div className='Box1'>
              <img src={mg2} alt="" />
              <br></br>
              <h3>Gray Matters</h3>
              <br></br>
              <Rating rating={5} />
              <br></br>
              <p>Lorem Ipsum is simply dummy
                text for printing.</p>
              <div className="dollar">
                <div className="dollar-left">
                  <button className='btn'>$15.00/ 15 min</button>
                </div>
                <div className="dollar-right">
                  <img src={msgv} alt="Message Icon" className="msg-image" />
                  <span>Message</span>

                </div>

              </div>

            </div>
            <div className='Box1'>
              <img src={mg3} alt="" />
              <br></br>
              <h3>Eli Stones</h3>
              <br></br>
              <Rating rating={5} />
              <br></br>
              <p>Lorem Ipsum is simply dummy
                text for printing.</p>
              <div className="dollar">
                <div className="dollar-left">
                  <button className='btn'>$15.00/ 15 min</button>
                </div>
                <div className="dollar-right">
                  <img src={msgv} alt="Message Icon" className="msg-image" />
                  <span>Message</span>

                </div>

              </div>
            </div>
            <div className='Box1'>
              <img src={mg4} alt="" />
              <h3>Brills Consultant</h3>
              <br></br>
              <Rating rating={5} />
              <br></br>
              <p>Lorem Ipsum is simply dummy
                text for printing.</p>
              <div className="dollar">
                <div className="dollar-left">
                  <button className='btn'>$15.00/ 15 min</button>
                </div>
                <div className="dollar-right">
                  <img src={msgv} alt="Message Icon" className="msg-image" />
                  <span>Message</span>

                </div>

              </div>
            </div>
            <div className='Box1'>
              <img src={mg5} alt="" />
              <br></br>
              <h3>Red Leaf</h3>
              <br></br>
              <Rating rating={5} />
              <br></br>
              <p>Lorem Ipsum is simply dummy
                text for printing.</p>
              <div className="dollar">
                <div className="dollar-left">
                  <button className='btn'>$15.00/ 15 min</button>
                </div>
                <div className="dollar-right">
                  <img src={msgv} alt="Message Icon" className="msg-image" />
                  <span>Message</span>

                </div>

              </div>
            </div>
            <div className='Box1'>
              <img src={mg6} alt="" />
              <br></br>
              <h3>Sky Lines</h3>
              <br></br>
              <Rating rating={5} />
              <br></br>
              <p>Lorem Ipsum is simply dummy
                text for printing.</p>
              <div className="dollar">
                <div className="dollar-left">
                  <button className='btn'>$15.00/ 15 min</button>
                </div>
                <div className="dollar-right">
                  <img src={msgv} alt="Message Icon" className="msg-image" />
                  <span>Message</span>

                </div>

              </div>
       

            </div>
      


      </div>
    </div >
    </>
  )
}

export default Body
