import * as React from "react";
import "./sidebar.css"
import logo from "../../../assets/jobhub_logo_light.png";


const SideBar = () => {
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
        <div className="dash-hamburger" onClick={toggleNavBar}>
            <div className="dash-line1"></div>
            <div className="dash-line2"></div>
            <div className="dash-line3"></div>
        </div>
            <div className={showNav ? "sb-container sb-mobile" : "sb-container"}>
                <div>
                <div className="sb-ttl"><img className="sb-ttl-img" src={logo} alt="" /><h3 className="sb-ttl-txt">JobHub.com</h3></div>
                <ul className="sb-list">
                    <li className="sb-list-item sb-list-item-active">Dashboard</li>
                    <li className="sb-list-item">Recruitment</li>
                    <li className="sb-list-item">Onboarding</li>
                    <li className="sb-list-item">Reports</li>
                    <li className="sb-list-item">Calendar</li>
                    <li className="sb-list-item">Settings</li>
                </ul>
                </div>
                <div className="sb-upgrade">
                    <p className="sb-upgrade-txt">Upgrade to premium to unlock full features</p>
                    <p className="sb-upgrade-btn"><span className="arrow"></span></p>
                </div>
            </div>
        </>
    )
}

export default SideBar;