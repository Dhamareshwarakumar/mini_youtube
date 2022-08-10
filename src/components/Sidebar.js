import React from 'react';

// Components
import SidebarItem from './common/SidebarItem';


const Sidebar = () => {
    return (
        <div className='sidebar text-light'>
            <div className="logo" style={{ marginBottom: "20px" }}><i className="bi bi-youtube" style={{ color: "#FF0000" }}></i> MyTube</div>
            <SidebarItem text="Home" link="/" />
            <SidebarItem text="History" link="/history" />
        </div >
    )
}

export default Sidebar