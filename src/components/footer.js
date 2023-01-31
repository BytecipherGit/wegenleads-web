import React from "react";
import { useNavigate } from "react-router-dom";

import FooterLogo from "../static/images/footer-logo.png";
import FacebookIcon from "../static/images/facebook.svg";
import InstagramIcon from "../static/images/instagram.svg";


export const FooterView = () => {
    const navigate = useNavigate();

    return (
        <>

            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <button onClick={() => { navigate("/") }} className="footlogo cursor-pointer"  ><img src={FooterLogo} alt="logo" /></button>
                        </div>
                        <div className="col-md-2">
                            <h2>Quick links</h2>
                            <ul>
                                <li><button type="button" onClick={() => navigate("/features")} className="cursor-pointer" >Features</button></li>
                                <li><button type="button" onClick={() => navigate("/pricing")} className="cursor-pointer">Pricing</button></li>
                                <li><button type="button" onClick={() => navigate("/examples")} className="cursor-pointer">Examples</button></li>
                                <li><button type="button" onClick={() => navigate("/not-found")} className="cursor-pointer">Contact</button></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h2>Customers</h2>
                            <ul>
                                <li><button type="button" onClick={() => navigate("/login")} className="cursor-pointer">Sign In</button></li>
                                <li><button type="button" onClick={() => navigate("/get-started")} className="cursor-pointer">Sign Up</button></li>
                                <li><button type="button" onClick={() => navigate("/not-found")} className="cursor-pointer"> Forget Password</button></li>
                                <li><button type="button" onClick={() => navigate("/not-found")} className="cursor-pointer">Blog</button></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h2>Get in Touch</h2>
                            <ul>
                                <li><button >Supportinfo@wegenleads.com</button></li>
                                <li><button >232,Boston,London</button></li>
                                <li><button >FAQs</button></li>
                                <span className="d-flex">
                                    <li><button type="button" onClick={() => navigate("/not-found")} className="cursor-pointer"><img src={FacebookIcon} alt="facebook icon" /></button></li>
                                    <li><button type="button" onClick={() => navigate("/not-found")} className="cursor-pointer"><img src={InstagramIcon} alt="instagram icon" /></button></li>
                                </span>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <div className="coppyrightbg">
                                © All rights reserved by wegenleads
                            </div>
                        </div>
                    </div >
                </div >
            </footer >
        </>

    )
}