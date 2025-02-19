import React from 'react'
import './Middlebody2.css'
import { FaStar, FaRegStar } from 'react-icons/fa';
import mg20 from '../../assets/mg20.png'
import mg21 from '../../assets/mg21.png'
import mg22 from '../../assets/mg22.png'

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

const Middlebody2 = () => {
  return (
    <>
      <div className='Midd2'>
        <div className='Left1'>
          <h2 style={{color:"#1C4CA0"}}>Testominals</h2>
          <h4 style={{fontSize:"normal"}}>Satisfied clients who achieved their immigration dreams with us</h4>
        </div>
        <div className='Right1'>
          <button>View All</button>
        </div>
      </div>

      <div className='midb1'>
        <div className='b1'>
          <div className="b1upper-part">
            <div className="part1">
              <img src={mg20} alt="" />
            </div>
            <div className="part2">
              <h3>Kevin M.</h3>
              <Rating rating={5} />

            </div>
          </div>
          <div className="b1lowerpart">
            <h4>Outstanding service! Their service helped
              me navigate the complex process with ease.
              Highly recommended!</h4>
          </div>

        </div>

        <div className='b1'>
          <div className="b1upper-part">
            <div className="part1">
              <img src={mg21} alt="" />
            </div>
            <div className="part2">
              <h3>Olivia Spark</h3>
              <Rating rating={5} />

            </div>
          </div>
          <div className="b1lowerpart">
            <h4>They made my dream of relocating a reality.
              Thank you for the excellent support. 5 stars!</h4>
          </div>


        </div>

        <div className='b1'>
          <div className="b1upper-part">
            <div className="part1">
              <img src={mg22} alt="" />
            </div>
            <div className="part2">
              <h3>Luciiaa Greem</h3>
              <Rating rating={5} />

            </div>
          </div>
          <div className="b1lowerpart">
            <h4>Exceptional guidance! Their expertise was
              instrumental in securing my immigration
              status. Delighted with their service!</h4>
          </div>

        </div>
      </div>
    </>
  )
}

export default Middlebody2
