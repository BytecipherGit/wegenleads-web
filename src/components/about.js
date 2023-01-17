import React from "react";

import AboutVisitors from "../static/images/about-visitors.png";
import FeatureRight from "../static/images/featureRight.png";
import ClientLgo1 from "../static/images/clientLgo1.svg";
import ClientLgo2 from "../static/images/clientLgo2.svg";
import ClientLgo3 from "../static/images/clientLgo3.svg";
import ClientLgo4 from "../static/images/clientLgo4.svg";
import ClientLgo5 from "../static/images/clientLgo5.svg";
import ClientLgo6 from "../static/images/clientLgo6.svg";
import HighConverting from "../static/images/high-converting.png";
import BulletIcon from "../static/images/bullet-icon.svg";
import FootbtBgTop from "../static/images/footbtBgTop.png";
import FootbtBgbottom from "../static/images/footbtBgbottom.png";
import Vctimgimg1 from "../static/images/vctimgimg1.png";
import Vctimgimg2 from "../static/images/vctimgimg2.png";
import RightArrow from "../static/images/right-arrow.svg";
import MarketingProblem from "../static/images/marketing-problem.png";
import AboutLeadership from "../static/images/about-leadership.png";
import PersonIcon1 from "../static/images/person-icon-1.svg";
import PersonIcon2 from "../static/images/person-icon-2.svg";
import PersonIcon3 from "../static/images/person-icon-3.svg";
import AboutTOpslider from "../static/images/about-sli-top.png";
import AboutSlibottom from "../static/images/about-sli-bottom.png";
import AboutSlirighttop from "../static/images/about-sli-righttop.png";
import AboutSlirightbottom from "../static/images/about-sli-rightbottom.png";
import AboutEffect1 from "../static/images/abouteffect01.png";
import AboutEffect2 from "../static/images/abouteffect02.png";
import AboutEffect3 from "../static/images/abouteffect03.png";
import Vctimgimg4 from "../static/images/vctimgimg4.png";
import Vctimgimg5 from "../static/images/vctimgimg5.png";
import PlayButton from "../static/images/play-button.png";
import IdeaImgarrow from "../static/images/ideaImg-arrow.png";

import { FooterView } from "./footer";
import { HeaderView } from "./header";
import { useNavigate } from "react-router-dom";

export const AboutView = () => {

    const navigate = useNavigate();

    return (
        <>
            <HeaderView />
            <div className="sliderpart featureslide aboutcussldr">
                <img src={AboutTOpslider} alt="Slide" className="cussliimgtop" />
                <img src={AboutSlibottom} alt="Slide" className="cussliimgbotom" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 align-self-center">
                            <h1>184,298+ websites are powered by Phonesites</h1>
                        </div>
                        <div className="col-md-4 align-self-center">
                            <div className="featurerightmar">
                                <img src={AboutVisitors} className="imgright" alt="slider" />
                                <img src={FeatureRight} className="featurerightimg" alt="slider" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={AboutSlirighttop} alt="Slide" className="cussliimgtopRight" />
                <img src={AboutSlirightbottom} alt="Slide" className="cussliimgbotomRight" />
            </div>
            <div className="clientprt">
                <div className="container-fluid">
                    <p>184,298+ websites are powered by Phonesites</p>
                    <div className="row col-md-9 m-auto">
                        <div className="col-md-2 col-sm-4 col-4">
                            <img src={ClientLgo1} alt='Logo 1' />
                        </div>
                        <div className="col-md-2 col-sm-4 col-4">
                            <img src={ClientLgo2} alt='Logo 2' />
                        </div>
                        <div className="col-md-2 col-sm-4 col-4">
                            <img src={ClientLgo3} alt='Logo 3' />
                        </div>
                        <div className="col-md-2 col-sm-4 col-4">
                            <img src={ClientLgo4} alt='Logo 4' />
                        </div>
                        <div className="col-md-2 col-sm-4 col-4">
                            <img src={ClientLgo5} alt='Logo 5' />
                        </div>
                        <div className="col-md-2 col-sm-4 col-4">
                            <img src={ClientLgo6} alt='Logo 6' />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" aboutIdea">
                <div className="container-fluid">
                    <img src={Vctimgimg4} alt="Vct" className="vctidealeft" />
                    <img src={Vctimgimg5} alt="Vct" className="vctidearight"  />
                    <h1 className="col-xl-8 col-lg-10 m-auto">We built Phonesites to <span className="d-black">make launching your ideas</span> easy and fast</h1>
                    <div className="col-xl-5 col-lg-7 col-md-8 m-auto">
                        <p className="pragraph">Before starting Phonesites, we were frustrated by the solutions on the market. They were complicated, bulky, and required a desktop computer.We wanted to make launching our ideas and offers easy and fast. And we wanted to do it from any device, from anywhere.
                    </p>
                    </div>
                    <div className="row col-lg-8 m-auto">
                        <div className="col-lg-3">
                            <div className="aboutIdeaImgpossion">
                                <img src={IdeaImgarrow} alt="arrow" className="ml-5 mb-5"/>
                                <img src={PlayButton} alt="Play" />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="ideaservices">
                                        <h4>52M+</h4>
                                        <p>We built Phonesites to make launching your ideas easy and fast</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="ideaservices">
                                        <h4>170K+</h4>
                                        <p>We built Phonesites to make launching your ideas easy and fast</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="ideaservices">
                                        <h4>1.3M+</h4>
                                        <p>We built Phonesites to make launching your ideas easy and fast</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutimgeffect">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={AboutEffect1} alt="About Effect" />
                        </div>
                        <div className="col-md-4">
                            <img src={AboutEffect2} alt="About Effect" />
                        </div>
                        <div className="col-md-4">
                            <img src={AboutEffect3} alt="About Effect" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="cusServis featureservi">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-md-5 cusServisDetsils  align-self-center">
                            <h2>We are guided by core values</h2>
                            <p>Work on files together in real-time, and review and get feedback without the back and forth.</p>
                            <ul>
                                <li><img src={BulletIcon} alt="Bullet Icon" /> Produce more ads without spending more time</li>
                                <li><img src={BulletIcon} alt="Bullet Icon" /> Get notified about comments and status updates</li>
                                <li><img src={BulletIcon} alt="Bullet Icon" /> Have one single source of truth for all design</li>
                            </ul>
                            {/* <button className="ActiveButton">View All Features</button> */}
                            <div className="cusprofilebox">
                                <img src={Vctimgimg4} alt="" />
                                <div className="col-xl-6 col-lg-8 col-md-10">
                                    <h6><i>“We built Phonesites to make launching your ideas easy and fast”</i></h6>
                                    <h4>James Borden- CEO</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <img src={HighConverting} alt="High Converting" className="imgwidth" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="training-support">
                <div className="container-fluid">
                    <h1>Providing the easiest solution for a complex marketing problem</h1>
                    <div className="row justify-content-between">
                        <div className="col-md-5 cusServisDetsils  align-self-center">
                            <h2>We've helped 10k+ teams</h2>
                            <p>Since 2018, Phonesites has worked to achieve the goals of its customers.‍We work with customers across several industries like auto, finance, real estate, insurance, home services, coaching, consulting, and more.</p>

                            {/* <button className="ActiveButton">View All Features</button> */}
                            <div className="cusprofilebox">
                                <img src={Vctimgimg4} alt="" />
                                <div className="col-xl-6 col-lg-8 col-md-10">
                                    <h6><i>“We built Phonesites to make launching your ideas easy and fast”</i></h6>
                                    <h4>James Borden- CEO</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <img src={MarketingProblem} alt="High Converting" className="imgwidth" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="favorite-tools aboutleadership">
                <div className="container-fluid">
                    <h2>Leadership at Phonesites</h2>

                    <div className="">
                        <div className="row m-auto pb-5">
                            <div className="col-md-4">
                                <div className="trainingDesign">
                                    <img src={PersonIcon1} alt="person one" />
                                    <h2>Ahmad<br /> Philips</h2>
                                    <span className="highlight">Scrum Master</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="trainingDesign">
                                    <img src={PersonIcon2} alt="person two" />
                                    <h2>Ahmad<br /> Philips</h2>
                                    <span className="highlight">Scrum Master</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="trainingDesign">
                                    <img src={PersonIcon3} alt="person three" />
                                    <h2>Ahmad<br /> Philips</h2>
                                    <span className="highlight">Scrum Master</span>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-md-5 cusServisDetsils  align-self-center">
                                <h2>We’re based in<br /> Plano, Texas...</h2>
                                <p>W. Plano<br /> Parkway‍Plano, TX <br />75093</p>

                                {/* <button className="ActiveButton">View All Features</button> */}
                            </div>
                            <div className="col-md-6 align-self-center">
                                <img src={AboutLeadership} alt="High Converting" className="imgwidth" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footbtpart">
                <div className="overlay_footbtup"></div>
                <img src={FootbtBgTop} alt="" className="footbgtop" />
                <div className="container-fluid">
                    <div className="m-auto footdetails">
                        <img src={Vctimgimg1} alt="Vct" className="vctimgpo1" />
                        <h2>See how PAVE completes50,000 inspectionsevery month</h2>
                        <button className="button-Effect cursor-pointer" onClick={() => navigate("/get-started")}>GET STARTED NOW <img src={RightArrow} alt="" /> </button>
                        <img src={Vctimgimg2} alt="Vct" className="vctimgpo2" />
                    </div>
                </div>
                <img src={FootbtBgbottom} alt="" className="footbgbottom" />
            </div>
            <FooterView />
        </>
    )
}