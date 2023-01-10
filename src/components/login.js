import React from "react";

import SmsIcon from "../static/images/sms.svg";
import KeyIcon from "../static/images/key.svg";

import { HeaderView } from "./header";

export const LoginView = () => {


    return (
        <>
            <HeaderView />
            <div className="sliderpart featureslide">
                <div className="container-fluid">
                    <div className="login-container ">
                        <h1>Log in</h1>
                        <p>Easily build websites, landing pages, surveys,&nbsp;&nbsp;&nbsp;&nbsp;  pop-ups, and digital</p>
                        <div className="row mt-5" >
                            <div className="m-auto col-lg-10 col-md-8 align-self-center">

                                <form>
                                    <div className="form-group">
                                        <span className="formPositn">
                                            <input placeholder="Enter your Email address" type="email" required />
                                            <img src={SmsIcon} className='imgfrmPs' alt='password' />
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <span className="formPositn">
                                            <input placeholder="Enter your Password" type="password"  required/>
                                            <img src={KeyIcon} className='imgfrmPs' alt='password' />
                                        </span>
                                    </div>
                                    <div className="form-group ">
                                        <button type="submit" className="ActiveButton button-Effect" >Log in</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <p>Not a member yet? <span>Get started</span></p>
                        <p>Forgot password? <span>Reset password</span></p>
                    </div>


                </div>
            </div>

        </>
    )
}
