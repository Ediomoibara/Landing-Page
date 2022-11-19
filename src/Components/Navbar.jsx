import React from "react";

function Navbar() {
    return (
        <nav>
            <div className="navbar-container">
                <div className="logo-container">
                    <a href="#"><span>ROOT</span>HUB</a>
                </div>
                <div>
                    <input type={"checkbox"} className="menu-btn" id="menu-btn" />
                    <label className="menu-icon">
                        <span className="nav-icon"></span>
                    </label>
                </div>
                <div className="middle navbar">
                    <ul className="navbar">
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#page">Page</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="right navbar">
                        <li><a href="#"><button className="btn btn-nav"><i className="fa fa-user"></i>Log in</button></a></li>
                        <li><a href="#"><button className="btn btn-nav sign-up">Sign up</button></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;