import React, { useState, useEffect } from 'react';
import './Styles/Dashboard.css';
import { Feature2, features } from '../Constants';
import { Link } from 'react-router-dom';


function Dashboard() {

    return (
        <div className='dashboard_container'>
            <div className='dashboard-wrapper'>
                <div className='features'>
                    {features.map((feature, index) => (
                    <Link to={feature.to} >
                        <div className={`feature category-${feature.class}`}  key={index}>
                            <div className={`feature-icon icon-${feature.class}`}>
                                <feature.icon />
                            </div>
                            <div className='feature-text'>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    </Link>
                    ))}
                </div>
                <div className='features'>
                {Feature2.map((feature, index) => (
                    <div className={`feature category-${feature.class}`} key={index}>
                        <div className={`feature-icon icon-${feature.class}`}>
                            <feature.icon />
                        </div>
                        <div className='feature-text'>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                    ))}

                </div>

            </div>
        </div>
    );
}

export default Dashboard;
