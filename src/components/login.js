import React from "react";

import SmsIcon from "../static/images/sms.svg";
import KeyIcon from "../static/images/key.svg";
import LoginLeft from "../static/images/login-left.png";
import Vctimgimg5 from "../static/images/vctimgimg5.png";
import Vctimgimg4 from "../static/images/vctimgimg4.png";
import LoginBottom from "../static/images/login-bottom.png";
import LoginGraph from "../static/images/login-graph.png";

import { HeaderView } from "./header";
import { useNavigate } from "react-router-dom";

export const LoginView = () => {
    const navigate = useNavigate();


    return (
        <>
        <div className="loginbg">
            <HeaderView />
            <div className="sliderpart featureslide loginPage">
                <img src={LoginLeft} alt="Login Left" className="loginrightimg"/>
                <div className="container-fluid"> 
                    <img src={Vctimgimg5} alt="Login Left" className="leftvctimg"/>               
                    <div className="login-container ">
                        <h1>Log in</h1>
                        <p>Easily build websites, landing pages, surveys,<br /> pop-ups, and digital</p>
                        <div className="row m-auto col-xl-4 col-lg-6 col-md-8" >
                            <form>
                                <div className="form-group">
                                    <span className="formPositn">
                                        <input placeholder="Enter your Email address" type="email" required />
                                        <img src={SmsIcon} className='imgfrmPs' alt='password' />
                                    </span>
                                </div>
                                <div className="form-group">
                                    <span className="formPositn">
                                        <input placeholder="Enter your Password" type="password" required />
                                        <img src={KeyIcon} className='imgfrmPs' alt='password' />
                                    </span>
                                </div>
                                <div className="form-group ">
                                    <button type="submit" className="ActiveButton button-Effect col-md-8" >Log in</button>
                                </div>
                            </form>
                        </div>
                        <p>Not a member yet? <span onClick={() => { navigate("/get-started") }}>Get started</span></p>
                        <p>Forgot password? <span onClick={() => { navigate("/not-found") }}>Reset password</span></p>
                    </div>
                    <img src={Vctimgimg4} alt="Login Left" className="rightvctimg"/>
                </div>
                <img src={LoginGraph} alt="Login Left" className="loginGraphimg"/>
                <img src={LoginBottom} alt="Login Left" className="loginbottomimg"/>
            </div>
        </div>
        </>
    )
}
