import React, { useState, useEffect } from 'react';
import { FaHome } from "react-icons/fa"
import { MdAnnouncement } from "react-icons/md"
import { FaGraduationCap, FaUserGraduate } from "react-icons/fa6"
import { RiQuestionnaireFill , RiTeamFill} from "react-icons/ri"
import { GrMail } from "react-icons/gr"
import './Styles/Sidebar.css'
import { Link } from 'react-router-dom';
function Sidebar() {

    return (
        <div> 
            <div class="sidebar-container">
                <div className='line'></div>
                <div className='sidebar-list-wrapper'>
                    <ul className='sidebar-list'>
                        <Link to="/" className='sidebar-list-item'>
                            <FaHome className='sidebar-icon' />
                            <p href='#'>Home</p>
                        </Link>
                        <Link  to="courses" className='sidebar-list-item'>
                            <FaGraduationCap className='sidebar-icon' />
                            <p>Courses</p>
                        </Link>
                        <Link to="team" className='sidebar-list-item'>
                            <RiTeamFill className='sidebar-icon' />
                            <p>Our Team</p>
                        </Link>
                        <Link to="/faqs" className='sidebar-list-item'>
                            <RiQuestionnaireFill className='sidebar-icon' />
                            <p>FAQs</p>
                        </Link>
                        <li className='sidebar-list-item'>
                            <GrMail className='sidebar-icon' />
                            <p>Contact Us</p>
                        </li>
                        <li className='sidebar-list-item'>
                            <FaUserGraduate className='sidebar-icon' />
                            <p>Alumni Network</p>
                        </li>
                        <Link to="/about" className='sidebar-list-item'>
                            <MdAnnouncement className='sidebar-icon about-icon' />
                            <p>About Us</p>
                        </Link>
                    </ul>
                    

                </div>
            </div>
        </div>
    )
}

export default Sidebar