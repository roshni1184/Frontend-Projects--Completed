import React from 'react'
import '../Body/Body.css'
import mg7 from '../../assets/mg7.png'
import mg8 from '../../assets/mg8.png'
import mg9 from '../../assets/mg9.png'
import mg10 from '../../assets/mg10.png'
import mg11 from '../../assets/mg11.png'
import mg12 from '../../assets/mg12.png'
import arrowv from '../../assets/arrowv.png'

const Middlebody = () => {
    return (
        <>
            <div className='cont1' >

                <div className='Right'>
                    <div className='Box1  box11' style={{ backgroundImage: `url(${mg7})` }}>
                        <div className="box1about">
                            <h3>Gray Matters</h3>
                            <br></br>
                            <p>SCO. 114, Main Market Sector 34,
                                Chandigarh</p>
                             <br></br>
                            <div className="arrow">
                                <span>See Details</span>
                                <img src={arrowv} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='Box1 box11' style={{ backgroundImage: `url(${mg8})` }}>
                        <div className="box1about">
                            <h3>Brills Institute</h3>
                            <br></br>
                            <p>SCO. 114, Main Market Sector 34,
                                Chandigarh</p>
                            <br></br>
                            <div className="arrow">
                                <span>See Details</span>
                                <img src={arrowv} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='Box1 box11' style={{ backgroundImage: `url(${mg9})` }}>
                        <div className="box1about">
                            <h3>Eli Institute</h3>
                            <br></br>
                            <p>SCO. 114, Main Market Sector 34,
                                Chandigarh</p>
                            <br></br>
                            <div className="arrow">
                                <span>See Details</span>
                                <img src={arrowv} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='Box1 box11' style={{ backgroundImage: `url(${mg10})` }}>
                        <div className="box1about">
                            <h3>Touchstone</h3>
                            <br></br>
                            <p>SCO. 114, Main Market Sector 34,
                                Chandigarh</p>
                            <br></br>
                            <div className="arrow">
                                <span>See Details</span>
                                <img src={arrowv} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className='Box1 box11' style={{ backgroundImage: `url(${mg11})` }}>
                        <div className="box1about">
                            <h3>British Institute</h3>
                            <br></br>
                            <p>SCO. 114, Main Market Sector 34,
                                Chandigarh</p>
                            <br></br>
                            <div className="arrow">
                                <span>See Details</span>
                                <img src={arrowv} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='Box1 box11' style={{ backgroundImage: `url(${mg12})` }}>
                        <div className="box1about">
                            <h3>Mantrin Institute</h3>
                            <br></br>
                            <p>SCO. 114, Main Market Sector 34,
                                Chandigarh</p>
                            <br></br>
                            <div className="arrow">
                                <span>See Details</span>
                                <img src={arrowv} alt="" />
                            </div>
                        </div>
                    </div>



                </div>
                <div className='Left'>
                    <h2><b>Top Rated Consultants</b></h2>
                    <br></br>
                    <h3 style={{ fontWeight: "normal", marginTop: "5px" }}>Our trusted partner in navigation
                        the immigration journey</h3>
                    <br></br>
                    <button className='Left-btn' style={{ fontWeight: "normal", marginTop: "15px" }}> View All</button>
                </div>
            </div>
        </>
    )
}

export default Middlebody
