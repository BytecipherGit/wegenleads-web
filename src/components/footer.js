import React from "react";
import FooterLogo from "../static/images/footer-logo.png";
import FacebookIcon from "../static/images/facebook.svg";
import InstagramIcon from "../static/images/instagram.svg";

export const FooterView = () => {

    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <button href="index.html" className="footlogo"><img src={FooterLogo} alt="logo" /></button>
                        </div>
                        <div className="col-md-2">
                            <h2>Quick links</h2>
                            <ul>
                                <li><button >Features</button></li>
                                <li><button >Pricing</button></li>
                                <li><button >Examples</button></li>
                                <li><button >Contact</button></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h2>Customers</h2>
                            <ul>
                                <li><button >Sign In</button></li>
                                <li><button >Sign Up</button></li>
                                <li><button >Forget Password</button></li>
                                <li><button >Blog</button></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h2>Get in Touch</h2>
                            <ul>
                                <li><button >Supportinfo@wegenaeads.com</button></li>
                                <li><button >232,Boston,London</button></li>
                                <li><button >FAQs</button></li>
                                <span className="d-flex">
                                    <li><button ><img src={FacebookIcon} alt="facebook icon" /></button></li>
                                    <li><button ><img src={InstagramIcon} alt="instagram icon" /></button></li>
                                </span>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <div className="coppyrightbg">
                                © All rights reserved by wegenleads
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}