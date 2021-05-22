import * as React from "react";
import "./Start.css";
import NavBar from "../GeneralComponents/navbar";
import logo from "../../../assets/jobhub_logo_light.png";
import wave from "../../../assets/wave.png";
import logo1 from "../../../assets/jobhub_logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const Start = () => {
  const [state, setState] = React.useState({
    signin: true,
    email: "",
    password: "",
    confirmpassword: "",
    email2: "",
    password2: "",
  });
  const { signin, email, password, confirmpassword, email2, password2 } = state;
  let history = useHistory();
  const signinSwitch = () => {
    setState({
      ...state,
      signin: true,
    });
  };
  const signupSwitch = () => {
    setState({
      ...state,
      signin: false,
    });
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const signupBtn = () => {
    setState({
      ...state,
      email: "",
      password: "",
      confirmpassword: "",
    });
    notify("Signup successful!");
    return setTimeout(() => {
      history.push("/dashboard")
    }, 3000);
  };
  const signinBtn = () => {
    setState({
      ...state,
      email2: "",
      password2: "",
    });
    notify("Signin successful!");
    return setTimeout(() => {
      history.push("/dashboard")
    }, 3000);
  };
  const notify = (message: string) => {
    window.scrollTo(-0, -0);
    toast(message, { containerId: "B" });
  };
  return (
    <>
      <div className="start-container">
        <div className="start-txt">
          <NavBar />
          <div>
            <div className="start-content">
              <div className="start-ttl">
                <img className="start-ttl-img" src={logo} alt="" />
                <h1>JobHub.com</h1>
              </div>
              <p className="start-content-txt">
                A quicker way to hire and get hired
              </p>
              <button
                className="start-btn start-btn-signup"
                onClick={signupSwitch}
              >
                Signup
              </button>
              <button
                className="start-btn start-btn-signin"
                onClick={signinSwitch}
              >
                Signin
              </button>
            </div>
            <img className="start-wave" src={wave} alt="wave" />
          </div>
        </div>
        {signin && (
          <div className="start-login">
            <div className="jh-signin">
              <img className="jh-signin-img" src={logo1} alt="" />
              <h1>Signin</h1>
            </div>
            <label className="jh-signin-label" htmlFor="mail">
              Email Address{" "}
              <input
                id="mail"
                onChange={handleChange}
                value={email2}
                name="email2"
                type="email"
              />
            </label>
            <label className="jh-signin-label" htmlFor="password">
              Password{" "}
              <input
                id="password"
                onChange={handleChange}
                value={password2}
                name="password2"
                type="password"
              />
            </label>
            <button className="start-btn jh-signin-btn" onClick={signinBtn}>
              Signin
            </button>
          </div>
        )}
        {!signin && (
          <div className="start-login">
            <div className="jh-signin">
              <img className="jh-signin-img" src={logo1} alt="" />
              <h1>Signup</h1>
            </div>
            <label className="jh-signin-label" htmlFor="mail">
              Email Address{" "}
              <input
                id="mail"
                onChange={handleChange}
                value={email}
                name="email"
                type="email"
              />
            </label>
            <label className="jh-signin-label" htmlFor="password">
              Password{" "}
              <input
                id="password"
                onChange={handleChange}
                value={password}
                name="password"
                type="password"
              />
            </label>
            <label className="jh-signin-label" htmlFor="password">
              Confirm Password{" "}
              <input
                id="password"
                onChange={handleChange}
                value={confirmpassword}
                name="confirmpassword"
                type="password"
              />
            </label>
            <button className="start-btn jh-signin-btn" onClick={signupBtn}>
              Signup
            </button>
          </div>
        )}
      </div>
      <ToastContainer
        enableMultiContainer
        containerId={"B"}
        toastClassName="bg-info text-white"
        hideProgressBar={true}
        position={toast.POSITION.TOP_CENTER}
      />
    </>
  );
};

export default Start;
