import * as React from "react";
import "./navbar.css"

const NavBar = () => {
    const [state, setState] = React.useState({
        showNav: false,
    })
    const { showNav }= state;
    const toggleNavBar = () => {
        if(showNav === false) {
            setState({
                ...state,
                showNav: true,
            })
        }
        else { 
           setState({
            ...state,
            showNav: false,
            })
        }
    }
    return (
        <>
        <div className={showNav ? "jh-nav show-nav" : "jh-nav"}>
            <span className="jh-nav-item">About us</span>
            <span className="jh-nav-item">Services</span>
            <span className="jh-nav-item">Contact</span>
            <span className="jh-nav-item no-marg">FAQs</span>
        </div>
        <div className="jh-hamburger" onClick={toggleNavBar}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        </>
    )
}

export default NavBar;