import React from "react";
import { Image } from "semantic-ui-react";

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
import NotespadornIcon from "../static/images/notespadorn-icon.svg";
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
import DlLogo1 from "../static/images/dl-logo1.svg";
import DlLogo2 from "../static/images/dl-logo2.svg";
import DlLogo3 from "../static/images/dl-logo3.svg";
import DlLogo4 from "../static/images/dl-logo4.svg";
import DlLogo5 from "../static/images/dl-logo5.svg";
import DlLogo6 from "../static/images/dl-logo6.svg";
import DlLogo7 from "../static/images/dl-logo7.svg";
import DlLogo8 from "../static/images/dl-logo8.svg";
import DlLogo9 from "../static/images/dl-logo9.svg";
import DlLogo10 from "../static/images/dl-logo10.svg";
import DlLogo11 from "../static/images/dl-logo11.svg";
import RightArrow from "../static/images/right-arrow.svg";
import FootbtBgTop from "../static/images/footbtBgTop.png";
import FootbtBgbottom from "../static/images/footbtBgbottom.png";
import Vctimgimg1 from "../static/images/vctimgimg1.png";
import Vctimgimg2 from "../static/images/vctimgimg2.png";
import Testimonial1 from "../static/images/testimonialimg1.png";
import Testimonial2 from "../static/images/testimonialimg2.png";
import TestimonialQuete from "../static/images/testimonial-quete.png";

import { FooterView } from "./footer";
import { HeaderView } from "./header";
import { SimpleSliderView } from "../common/slider";
import { useNavigate } from "react-router-dom";

export const HomeView = () => {

    const navigate=useNavigate();

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
                                    <button className="ActiveButton button-Effect " type="button"> Get Started Free</button>
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
                    <div className="col-xl-7 col-lg-8 col-md-10 m-auto slidehead">
                        <h1>Features that get you leads</h1>
                        <p>Phonesites is the easiest and fastest way to start collecting leads. Create pages from your phone or desktop in minutes.</p>
                    </div>
                </div>
                <div className="sliderdiv">

                    <SimpleSliderView centerMode>
                        <div className="col-md-12">
                            <div className="slideDesign">
                                <Image draggable={false} src={NotespadornIcon} />
                                <h2>Use On Any Device</h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="slideDesign">
                                <Image draggable={false} src={NotificationIcon} />
                                <h2>Use On Any Device</h2>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="slideDesign">
                                <Image draggable={false} src={NotespadIcon} />
                                <h2>Use On Any Device</h2>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="slideDesign">
                                <Image draggable={false} src={NotesIcon} />
                                < h2 > Use On Any Device</h2>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="slideDesign">
                                <Image draggable={false} src={DuttIcon} />
                                < h2 > Use On Any Device</h2>
                            </div>

                        </div>
                    </SimpleSliderView>


                </div >

            </div >

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
                            <button className="ActiveButton button-Effect ">View All Features</button>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <img src={HighConverting} alt="High Converting" className="imgwidth" />
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
                            <img src={BusinessEasily} alt="Business Easily" className="imgwidth" />
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
                            <img src={UnlimitedWebsites} alt="High Converting" className="imgwidth" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="training-support">
                <div className="container-fluid">
                    <h1>Training and world-class support</h1>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="trainingDesign">
                                <img src={NotificationIcon} alt="Note" />
                                <h2>Guided 1:1 orientation call</h2>
                                <p>Schedule an orientation call with a coach from the dashboard. It's included as a Phonesites member.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trainingDesign">
                                <img src={NotesIcon} alt="Note" />
                                <h2>Weekly workshops</h2>
                                <p>Join the weekly marketing workshop where you will learn strategy, tactics, and best practices.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trainingDesign">
                                <img src={DuttIcon} alt="Note" />
                                <h2>Community support</h2>
                                <p>Get access to an active group of over 6k members and coaches on FB. Post 24/7 for help and feedback.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonialpart">
                <div className="container-fluid">
                    <h1>What teams around the world say</h1>
                </div>
                <div className="teamSliderDesign">
                    <SimpleSliderView partialVisible >
                        <div className="col-md-12">
                            <img src={TestimonialQuete} alt="Testimonial Quete" className="testiQuete" />
                            <div className="team-container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-8 align-self-center">
                                        <h3>Got a tough decision to make? </h3>
                                        <p>Turn to Barack Obama and Jeff Bezos’s strategies.</p>
                                    </div>
                                    <div className="col-lg-6 col-md-4">
                                        <img src={Testimonial1} alt="Testimonial" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <img src={TestimonialQuete} alt="Testimonial Quete" className="testiQuete" />
                            <div className="team-container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-8 align-self-center">
                                        <h3>Want to stay calm under stress? </h3>
                                        <p>Use the techniques of Nelson Mandela and the Dalai Lama.</p>
                                    </div>
                                    <div className="col-lg-6 col-md-4">
                                        <img src={Testimonial2} alt="Testimonial" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <img src={TestimonialQuete} alt="Testimonial Quete" className="testiQuete" />
                            <div className="team-container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-8 align-self-center">
                                        <h3>Got a tough decision to make? </h3>
                                        <p>Turn to Barack Obama and Jeff Bezos’s strategies.</p>
                                    </div>
                                    <div className="col-lg-6 col-md-4">
                                        <img src={Testimonial1} alt="Testimonial" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">

                            <img src={TestimonialQuete} alt="Testimonial Quete" className="testiQuete" />
                            <div className="team-container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-8 align-self-center">
                                        <h3>Want to stay calm under stress? </h3>
                                        <p>Use the techniques of Nelson Mandela and the Dalai Lama.</p>
                                    </div>
                                    <div className="col-lg-6 col-md-4">
                                        <img src={Testimonial2} alt="Testimonial" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SimpleSliderView>
                </div>
            </div>

            <div className="favorite-tools">
                <div className="container-fluid">
                    <h2>Phonesites integrates with 1000+ <span>of your favorite tools.</span></h2>
                    <div className="row col-lg-8 col-md- m-auto">
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo1} alt="Dl Logo" />
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo2} alt="Dl Logo" />
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo3} alt="Dl Logo" />
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo4} alt="Dl Logo" />
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo5} alt="Dl Logo" />
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo6} alt="Dl Logo" />
                        </div>
                    </div>
                    <div className="row col-lg-8 col-md- m-auto justify-content-center pt-5">
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo7} alt="Dl Logo" />
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo8} alt="Dl Logo" />
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo9} alt="Dl Logo" />
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo10} alt="Dl Logo" />
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo11} alt="Dl Logo" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footbtpart">
                <div className="overlay_footbt"></div>
                <img src={FootbtBgTop} alt="" className="footbgtop" />
                <div className="container-fluid">
                    <div className="m-auto footdetails">
                        <img src={Vctimgimg1} alt="Vct" className="vctimgpo1" />
                        <h2>See how PAVE completes50,000 inspectionsevery month</h2>
                        <button className="button-Effect cursor-pointer" onClick={()=>navigate("/get-started")}>GET STARTED NOW <img src={RightArrow} alt="" /> </button>
                        <img src={Vctimgimg2} alt="Vct" className="vctimgpo2" />
                    </div>
                </div>
                <img src={FootbtBgbottom} alt="" className="footbgbottom" />
            </div>


            <FooterView />
        </>
    )
}