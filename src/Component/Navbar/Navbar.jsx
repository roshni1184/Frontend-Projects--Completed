import React from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.png'
import { FaLocationDot } from "react-icons/fa6";
import bellIcon from '../../assets/Vector (1).png'
import Notification from '../../assets/Notification.png'
import user from '../../assets/mahdi-chaghari-HlNIC997xEk-unsplash 1.png'
import { GiAnticlockwiseRotation } from "react-icons/gi";
import Boy from '../../assets/Boy.png'
import { FaSearch, FaMicrophone } from "react-icons/fa";
import users from '../../assets/users.png'
import home from '../../assets/home.png'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <>

            <div className='nav-parent'>

                <div className="upper-nav-portion">

                    <div className="upper-nav-left">

                        <div className="logo">
                            <img src={logo} alt="" />
                            <h1>LOGO</h1>
                        </div>
                        <label for="locations"></label>

                        <select name="locations" id="locations">
                            <option value="Location">Location</option>
                            <option value="Mohali">Mohali</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Himachal">Himachal</option>
                            <option value="Punjab">Punjab</option>
                        </select>
                    </div>
                    <div className="upper-nav-right">

                        <ul>
                            <li>Become a consultant</li>
                            <li><img src={bellIcon} alt="" /></li>
                            <li><img src={Notification} alt="" /></li>
                            <li ><img src={user} alt="" className='user' /></li>
                            <li><p>$0.00</p></li>
                        </ul>
                    </div>

                </div>

                <div className="nav-body">

                    <div className="nav-body-left">
                        <div className="explore" style={{paddingTop:"30px"}} >
                            <p style={{fontSize : "30px", fontWeight:"20"}}>Guiding Your <span className='path-to-success'>Path to Success</span></p>
                            <p style={{fontSize : "30px", fontWeight:"20"}}>Expert consultation at your service</p>
                            <div className="input-box">
                                <input type="text" placeholder='Search Anything Here..' />
                                <button><CiSearch />Search                                </button>
                            </div>
                            <p><GiAnticlockwiseRotation /> Recent Searches: Institues in Mohali, Study Buddies, IELTS</p>
                        </div>
                        <div className="registered-number"> 
                            <div className="regs-1">
                                <div className="regs11">
                                    <img src={users} alt="" />
                                </div>
                                <div className="regs12">
                                <p>500+ Registered</p>
                                <p>Educational Consultants</p>
                                </div>
                            </div>
                            <div className="regs-2">
                            <div className="regs21">
                                <img src={home} alt="" />
                            </div>
                            <div className="regs22">
                               <p>400+ Registered</p>
                               <p>Training Institutes</p> 
                            </div>
                    
                            </div>
                            
                        </div>
                    </div>

                    <div className="nav-body-right">
                        <img src={Boy} alt="" />
                    </div>
                </div>

            </div>

            <div className='Responsive'>
                <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. !</p>
            </div>


            <center>
                <div className='Searchinp'>
                    <FaSearch className="search-icon" />
                    <input type='search' placeholder='Search Consultants here' />
                    <FaMicrophone className="mic-icon" />
                </div>
            </center>

        </>
    )
}

export default Navbar
