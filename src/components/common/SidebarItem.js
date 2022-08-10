import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ text, link }) => {
    return (
        <Link to={link} className="sidebar-item" style={{ color: "#fff", textDecoration: 'None' }}>
            {/* <div > */}
            <i className="bi bi-house-door-fill"></i> <p>{text}</p>
            {/* </div> */}
        </Link>
    )
}

export default SidebarItem