import React from "react";
import { FooterView } from "./footer";
import { HeaderView } from "./header";

import SliderRightImg from "../static/images/sliderright.png";
import ClientLgo1 from "../static/images/clientLgo1.svg";
import ClientLgo2 from "../static/images/clientLgo2.svg";
import ClientLgo3 from "../static/images/clientLgo3.svg";
import ClientLgo4 from "../static/images/clientLgo4.svg";
import ClientLgo5 from "../static/images/clientLgo5.svg";
import ClientLgo6 from "../static/images/clientLgo6.svg";
import NotesIcon from "../static/images/notes-icon.svg";
import NotificationIcon from "../static/images/notification-icon.svg";
import NotespadIcon from "../static/images/notespad-icon.svg";
import DuttIcon from "../static/images/dutt-icon.svg";
import HighConverting from "../static/images/high-converting.png";
import BulletIcon from "../static/images/bullet-icon.svg";
import BusinessEasily from "../static/images/business-easily.png";
import UnlimitedWebsites from "../static/images/unlimited-websites.png";
import ShortlistLogo from "../static/images/shortlist-logo.svg";
import SoftwareAdviceLogo from "../static/images/software-advice-logo.svg";
import c2Logo from "../static/images/c2-logo.svg";
import ForbesLogo from "../static/images/forbes-logo.svg";
import MNSLogo from "../static/images/mns-logo.svg";
import INCLogo from "../static/images/inc-logo.svg";

export const HomeView = () => {
    return (
        <>
            <HeaderView />
            <div className="sliderpart">
                <div className="overlay_slider"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <h1>Turn more of your visitors into <span>customers</span></h1>
                            <p>Easily build websites, landing pages, surveys, pop-ups, and digital business cards in just 10 minutes. All right from your phone!</p>
                            <form>
                                <div className="form-group">
                                    <input type="text" name="" placeholder="your@email.com" />
                                    <button className="ActiveButton">Get Started Free</button>
                                </div>
                                <label>Try Phonesites free for 14 days.</label>
                            </form>
                        </div>
                        <div className="col-md-7 align-self-center">
                            <img src={SliderRightImg} className="imgright" alt="slider" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="clientprt">
                <div class="container-fluid">
                    <p>184,298+ websites are powered by Phonesites</p>
                    <div className="row col-md-9 m-auto">
                        <div className="col-md-2 col-sm-4 col-6">
                            <img src={ClientLgo1} alt='Logo 1' />
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <img src={ClientLgo2} alt='Logo 2' />
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <img src={ClientLgo3} alt='Logo 3' />
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <img src={ClientLgo4} alt='Logo 4' />
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <img src={ClientLgo5} alt='Logo 5' />
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <img src={ClientLgo6} alt='Logo 6' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="featureSlider">
                <div className="container-fluid">
                    <div className="col-xl-6 col-lg-8 col-md-10 m-auto slidehead">
                        <h1>Features that get you leads</h1>
                        <p>Phonesites is the easiest and fastest way to start collecting leads. Create pages from your phone or desktop in minutes.</p>
                    </div>
                </div>
                <div className="sliderdiv">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="slideDesign">
                                <img src={NotificationIcon} alt="Note" />
                                <h2>Use On Any Device</h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="slideDesign">
                                <img src={NotespadIcon} alt="Note" />
                                <h2>Use On Any Device</h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="slideDesign">
                                <img src={NotesIcon} alt="Note" />
                                <h2>Use On Any Device</h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="slideDesign">
                                <img src={DuttIcon} alt="Note" />
                                <h2>Use On Any Device</h2>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>

            <div className="cusServis">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 cusServisDetsils">
                            <h2>Create high-converting landing pages faster</h2>
                            <p>Publish your first web or landing pages in a matter of minutes with ease.</p>
                            <ul>
                                <li><img src={BulletIcon} alt="Bullet Icon" /> 500+ mobile-responsive templates</li>
                                <li><img src={BulletIcon} alt="Bullet Icon" /> No-code, drag-&-drop builder</li>
                                <li><img src={BulletIcon} alt="Bullet Icon" /> Easiest landing page software on market</li>
                            </ul>
                            <button className="ActiveButton">View All Features</button>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <img src={HighConverting} alt="High Converting"  className="imgwidth" />
                        </div>
                    </div>

                    <div className="row cusmargi97">
                        <div className="col-md-5 order-md-3 cusServisDetsils">
                            <h2>Tools to grow your business easily</h2>
                            <p>Turn your web traffic into more leads and sales with our conversion toolkit.</p>
                            <ul>
                                <li><img src={BulletIcon} alt="Bullet Icon" /> Automated email and SMS follow-ups</li>
                                <li><img src={BulletIcon} alt="Bullet Icon" /> Pop-up forms to collect leads on any webpage</li>
                                <li><img src={BulletIcon} alt="Bullet Icon" /> AI-copywriter creates text for webpages</li>
                            </ul>
                        </div>
                        <div className="col-md-1 order-md-2"></div>
                        <div className="col-md-6 order-md-1 align-self-center">
                            <img src={BusinessEasily} alt="High Converting" className="imgwidth" />
                        </div>
                    </div>

                    <div className="row cusmargi97">
                        <div className="col-md-5 cusServisDetsils">
                            <h2>Enjoy unlimited websites, traffic, and leads</h2>
                            <p>Create, publish, and sell without limits. Go unlimited and get the keys to the kingdom.</p>
                            <ul className="serlogoul">
                                <li><img src={ShortlistLogo} alt="Shortlist Logo" /></li>
                                <li><img src={SoftwareAdviceLogo} alt="Software Advice Logo" /></li>
                                <li><img src={c2Logo} alt="c2 logo" /></li>
                                <li><img src={ForbesLogo} alt="Forbes Logo" /></li>
                                <li><img src={MNSLogo} alt="MNS Logo" /></li>
                                <li><img src={INCLogo} alt="INC Logo" /></li>
                            </ul>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <img src={UnlimitedWebsites} alt="High Converting"  className="imgwidth" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="training-support">
                <div className="container-fluid">
                    <h1>Training and world-class support</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="trainingDesign">
                                <img src={NotificationIcon} alt="Note" />
                                <h2>Guided 1:1 orientation call</h2>
                                <p>Schedule an orientation call with a coach from the dashboard. It's included as a Phonesites member.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="trainingDesign">
                                <img src={NotesIcon} alt="Note" />
                                <h2>Weekly workshops</h2>
                                <p>Join the weekly marketing workshop where you will learn strategy, tactics, and best practices.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="trainingDesign">
                                <img src={DuttIcon} alt="Note" />
                                <h2>Community support</h2>
                                <p>Get access to an active group of over 6k members and coaches on FB. Post 24/7 for help and feedback.</p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>

            <div className="">
                <div className="container-fluid">
                    <h1 className="m-auto pt-5 pb-5">What teams around the world say</h1>
                </div>
            </div>

           
            <FooterView />
        </>
    )
}