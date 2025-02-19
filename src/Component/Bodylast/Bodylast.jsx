import React from 'react'
import './Bodylast.css'
import mg13 from '../../assets/mg13.png'
import mg14 from '../../assets/mg14.png'
import mg15 from '../../assets/mg15.png'
import mg16 from '../../assets/mg16.png'
import arrow from '../../assets/arrow.png'

const Bodylast = () => {
    return (
        <>
            <div className='bodylast'>
                <div className='Left1'>
                    <h2 style={{color:"#1C4CA0"}}>Testominals</h2>
                    <h4 style={{fontSize:"normal"}}>Stay Updated with Our Latest Immigration Insights!</h4>
                
                </div>
                <div className='Right1'>
                    <button>View All</button>
                </div>
            </div>

            <div className='bodylast-b1'>
                <div className='b1'>
                    <img src={mg13} alt="" />
                    <br></br>
                    <h3>Immigration Challenges and
                        Solutions: Overview</h3>
                    <br></br>
                    <p>Immigration challenges and solutions
                        vary greatly depending on the country,
                        region, and context.</p>
                    <br></br>

                    <div className="read-more">
                        <span>Read More</span>
                        <img src={arrow} alt="Arrow" />
                    </div>



                </div>

                <div className='b1'>
                    <img src={mg14} alt="" />

                    <br></br>
                    <h3> How to Choose the Right
                        Immigration Firm</h3>
                    <br></br>
                    <p>Choosing the right immigration firm
                        is a crucial step in your journey to
                        immigrate to a new country.</p>
                    <br></br>

                    <div className="read-more">
                        <span>Read More</span>
                        <img src={arrow} alt="Arrow" />
                    </div>


                </div>

                <div className='b1'>
                    <img src={mg15} alt="" />
                    <br></br>
                    <h3> How to Choose the Right
                        Immigration Firm</h3>
                    <br></br>
                    <p>To foster a better understanding of
                        this issue, it's essential to distinguish
                        between myths and facts</p>
                    <br></br>

                    <div className="read-more">
                        <span>Read More</span>
                        <img src={arrow} alt="Arrow" />
                    </div>



                </div>
                <div className='b1'>
                    <img src={mg16} alt="" />
                    <br></br>
                    <h3> Navigating the Immigration
                        Process</h3>
                    <br></br>
                    <p>Immigrating to a new country is a
                        life-changing decision that comes with
                        its fair share of challenges.</p>
                    <br></br>

                    <div className="read-more">
                        <span>Read More</span>
                        <img src={arrow} alt="Arrow" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Bodylast
