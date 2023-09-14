import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <Header />
            <Sidebar />
                <div className="main-content">
                    <Outlet className="component" /> 
                </div>
            </div>
    )
}

export default Layout