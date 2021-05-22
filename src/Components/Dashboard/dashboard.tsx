import * as React from "react";
import "./dashboard.css";
import SideBar from "./SideBar/sidebar";
import search from "../../assets/search.png";
import mail from "../../assets/mail.png";
import bell from "../../assets/bell.png";
import avatar from "../../assets/avatar.png";
import avatar2 from "../../assets/avatar2.png";
import phone from "../../assets/phone.png";
import mail2 from "../../assets/mail2.png";
import message from "../../assets/message.png";
import "./SideBar/sidebar.css"
import close from "../../assets/close.png";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import "../External/GeneralComponents/navbar.css"

const Dashboard = () => {
    return (
        <>
        <div className="dash-container">
        <SideBar />
        <div className="jh-dash">
            <div className="jh-dash-content">
                <div className="dash-1">Dashboard</div>
                <div className="dash-2">
                    <div className="dash-2-1">
                        <img src={search} alt="search" />
                        <img src={mail} alt="messages" />
                        <img src={bell} alt="notification" />
                    </div>
                    <div className="dash-2-2">
                        <span>Onyinye</span>
                        <span className="dash-2-2-avatar"><img src={avatar} alt="avatar" /></span>
                    </div>
                </div>
                <div className="dash-3">
                    <h4 className="dash-3-ttl">Hello Onyinye,</h4>
                    <p className="dash-3-txt">You have 7 new applications</p>
                    <p className="dash-3-txt">Don’t forget to send out adverts for react.js developer and ux designer</p>
                    <button className="dash-3-btn">Read more</button>
                </div>
                <div className="dash-4">
                    <div className="dash-4-1st">
                        <div className="dash-4-date">May, 2021</div>
                        <div className="dash-4-arrow-sec">
                            <div className="dash-4-arrow-bg"><div className="dash-4-arrow-bod first-arrow"><span className="arrow"></span></div></div>
                            <div className="dash-4-arrow-bg"><div className="dash-4-arrow-bod"><span className="arrow"></span></div></div>
                        </div>
                        <div className="dash-4-from">
                            <p>From 13.05.21</p>
                            <img src={close} alt="close"/>
                        </div>
                        <div className="dash-4-from">
                        <p>From 13.05.21</p>
                            <img src={close} alt="close"/>
                        </div>
                    </div>
                    <Calendar className="calendar" />
                </div>
                <div className="dash-5-top">
                        <span className="dash-5-top-ttl">Recruitment Applications</span>
                        <button className="dash-5-top-btn">View All</button>
                    </div>
                <div className="dash-5">
                    <div className="dash-5-list-ttl">
                        <span className="item1">Full Name</span>
                        <span className="item2">Designation</span>
                        <span className="item3">Status</span>
                        <span className="item4"></span>
                    </div>
                    <div>
                        <div className="dash-5-list">
                            <span className="item1">
                                <p>Ogunbo Khalil</p>
                            </span>
                            <span className="item2">
                                <p className="designation designation1">UX Developer</p>
                            </span>
                            <span className="item3">
                                <p className="status status1">Schedule Interview</p>
                            </span>
                            <span className="item4">
                                <span className="ellipsis"></span>
                            </span>
                        </div>
                        <div className="dash-5-list">
                            <span className="item1">
                                <p>Samuel Goodnews Egho</p>
                            </span>
                            <span className="item2">
                                <p className="designation designation2">Frontend Developer</p>
                            </span>
                            <span className="item3">
                                <p className="status status2">Final Interview</p>
                            </span>
                            <span className="item4">
                                <span className="ellipsis"></span>
                            </span>
                        </div>
                        <div className="dash-5-list">
                            <span className="item1">
                                <p>Okafor Chidinma Precious</p>
                            </span>
                            <span className="item2">
                                <p className="designation designation3">React.js Developer</p>
                            </span>
                            <span className="item3">
                                <p className="status status3">Give Feedback</p>
                            </span>
                            <span className="item4">
                                <span className="ellipsis"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="dash-6" >
                    <img src={avatar2} alt="" />
                    <p className="dash-6-name">Miss Onyinye</p>
                    <p className="dash-6-role">Snr. UI designer</p>
                    <div className="dash-6-icon-sec">
                        <span className="dash-6-icon"><img src={phone} alt="" /></span>
                        <span className="dash-6-icon"><img src={mail2} alt="" /></span>
                        <span className="dash-6-icon"><img src={message} alt="" /></span>
                    </div>
                    <hr className="dash-6-div" />
                    <div className="dash-6-list">
                        <div className="dash-6-list-item">
                            <h6 className="dash-6-list-item-hd">Company</h6>
                            <p className="dash-6-list-item-txt">Design.co</p>
                        </div>
                        <div className="dash-6-list-item" >
                            <h6 className="dash-6-list-item-hd">Date Joined</h6>
                            <p className="dash-6-list-item-txt">22.01.2021</p>
                        </div>
                        <div className="dash-6-list-item" >
                            <h6 className="dash-6-list-item-hd">Projects</h6>
                            <p className="dash-6-list-item-txt">11 in progress</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Dashboard;