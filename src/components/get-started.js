import React, { useState } from "react";

import RightArrow from "../static/images/right-arrow.svg";
import TvIcon from "../static/images/presention-chart.svg";
import AuthorProfile from "../static/images/author-profile.png";

import { HeaderView } from "./header";
import { AccordionContentView } from "../common/accordion-content";
import { useNavigate } from "react-router-dom";

export const GetStartedView = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    return (
        <>
            <HeaderView />
            <div className="sliderpart featureslide">
                <div className="container-fluid">
                    <div className="get-started-container">
                        <div className="container-fluid">
                            <div className="row  get-section d-flex justify-content-center ">
                                <span className="active">1</span>
                                <h4><span >Create Account</span></h4>
                                <span >2</span>
                                <h4>Add Payment Details</h4>
                            </div>

                            <h3>Start Your <span>14</span> Day Free Trial</h3>
                            <p>Have your landing pages online in minutes.</p>
                            <div className="form-container ">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input placeholder="First Name" type="text" required />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input placeholder="Email" type="email" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input placeholder="Last Name" type="text" required />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input placeholder="Password" type="password" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button type="submit" className="ActiveButton button-Effect" >Add Payment Details <img src={RightArrow} alt="right-arrow" /></button>
                                        </div>
                                    </div>

                                </form>
                                <p>By creating an account, you are agreeing to our <span onClick={() => { navigate("/not-found") }}> Terms of Service</span> and<span onClick={() => { navigate("/not-found") }}> Privacy Policy</span>.</p>
                                <p>Already have an account? <span onClick={() => { navigate("/login") }}>Log In</span></p>

                            </div>

                            <div className="mt-5 d-flex justify-content-between ">
                                <div className="row">
                                    <div className="col-lg-6 ">
                                        <div className="testimonial-head ">
                                            <div className="row">
                                                <img src={TvIcon} alt="tv-icon" />
                                                <span>
                                                    <h5>Over 1.5M leads generated</h5>
                                                    <p>176k pages made</p>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="testimonial-quote ">
                                            <p>“In the last 5 weeks I've been able to generate over 524 highly qualified leads with Phonesites. I use it for several different types businesses, and it works with them all of them. The ROI for me was 1,000% or more.”
                                            </p>
                                            <div className="testimonial-quote-author">
                                                <div className="row">
                                                    <img src={AuthorProfile} alt="author" />
                                                    <span>
                                                        <h6>Mat Smith</h6>
                                                        <p>Founder & CEO at Wealth Creation Station</p>
                                                    </span>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="get-started-faq">
                                            <h6>Frequently asked questions</h6>
                                            <AccordionContentView
                                                title={"Do you have a money back guarantee?"}
                                                index={1}
                                                activeIndex={activeIndex}
                                                setActiveIndex={setActiveIndex}
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </AccordionContentView>
                                            <AccordionContentView
                                                title={"Do I pay anything today?"}
                                                index={2}
                                                activeIndex={activeIndex}
                                                setActiveIndex={setActiveIndex}
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </AccordionContentView>
                                            <AccordionContentView
                                                title={"I'm not very tech savvy, is this for me?"}
                                                index={3}
                                                activeIndex={activeIndex}
                                                setActiveIndex={setActiveIndex}
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </AccordionContentView>
                                            <AccordionContentView
                                                title={"Can I change my plan after I sign up?"}
                                                index={4}
                                                activeIndex={activeIndex}
                                                setActiveIndex={setActiveIndex}
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </AccordionContentView>
                                            <AccordionContentView
                                                title={"How does the Phonesites Coaching work?"}
                                                index={5}
                                                activeIndex={activeIndex}
                                                setActiveIndex={setActiveIndex}
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </AccordionContentView>
                                            <AccordionContentView
                                                title={"Can I use my own domain?"}
                                                index={6}
                                                activeIndex={activeIndex}
                                                setActiveIndex={setActiveIndex}
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </AccordionContentView>
                                            <AccordionContentView
                                                title={"What happens if I want to cancel?"}
                                                index={7}
                                                activeIndex={activeIndex}
                                                setActiveIndex={setActiveIndex}
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </AccordionContentView>


                                        </div>

                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>


                </div>



            </div>

        </>
    )
}