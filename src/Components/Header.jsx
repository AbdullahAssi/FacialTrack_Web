import React, { useState, useEffect } from 'react';
import { auth } from '../Config/Firebase';
import { Nutech } from '../assets';
import './Styles/Navbar.css'

function Header() {
    const [user, setUser] = useState(null);
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    };

    const handleLogout = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in
                setUser(user);
            } else {
                // User is signed out
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);


    return (
        <div className='navbar_container'>
                <img src={Nutech} alt="" width="80px" />
                {user && (
                    <div className='profile-container'>
                        {user.photoURL && <img src={user.photoURL} className='profile' alt="Profile"onClick={toggle}  />}
                        <div className={`profile_dropdown ${show ? 'open' : 'not-open'}`}>
                            <p >{user.displayName}</p>
                            <p>{user.email}</p>
                            <p>Batch:AI 2022</p>
                            <p>Department: Computer Science</p>
                            <button  onClick={handleLogout} className='logout-button'>Logout</button>

                        </div>
                    </div>
                )}
        </div>
    )
}

export default Header