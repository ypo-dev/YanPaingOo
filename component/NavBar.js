import React from 'react'
import LogoImg from '../public/logo.png'


function NavBar() {
    return (

        <nav className="navbar fixed-top navbar-expand-lg navbar-light navbar-bg">
            <div className="container-fluid">
                <a href="#"><img className="NavLogo" src={LogoImg.src} /></a>
                <div
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    className="hamburger"
                >
                    <input type="checkbox" className="hamburger-init" />
                    <div className="menu">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li id="navHome" className="nav-item nav-hover">
                            <a className="nav-link" href="#"
                            ><span className="nav-text"> Home </span>
                            </a>
                        </li>
                        <li id="navAbout" className="nav-item nav-hover">
                            <a className="nav-link" href="#about"
                            ><span className="nav-text"> About Me </span></a
                            >
                        </li>
                        <li className="nav-item nav-hover">
                            <a className="nav-link" href="#skills"
                            ><span className="nav-text"> Skills </span></a
                            >
                        </li>
                        <li className="nav-item nav-hover">
                            <a className="nav-link" href="#projects"
                            ><span className="nav-text"> Projects </span></a
                            >
                        </li>
                        <li className="nav-item nav-hover">
                            <a className="nav-link" href="#contact"
                            ><span className="nav-text"> Contact Me </span></a
                            >
                        </li>
                    </ul>
                </div>
                <div className="mailBox-hide">
                    <form className="justify-content-end">
                        <p className="mail-box">
                            <i className="fas fa-envelope"></i> Email: yanpaingoo.dev@gmail.com
                        </p>
                    </form>
                </div>
            </div >
        </nav >

    )
}

export default NavBar
