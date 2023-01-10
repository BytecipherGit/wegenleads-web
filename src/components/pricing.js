import React, { useState } from "react";
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

import ClientLgo1 from "../static/images/clientLgo1.svg";
import ClientLgo2 from "../static/images/clientLgo2.svg";
import ClientLgo3 from "../static/images/clientLgo3.svg";
import ClientLgo4 from "../static/images/clientLgo4.svg";
import ClientLgo5 from "../static/images/clientLgo5.svg";
import ClientLgo6 from "../static/images/clientLgo6.svg";
import RightArrow from "../static/images/right-arrow.svg";
import FootbtBgTop from "../static/images/footbtBgTop.png";
import FootbtBgbottom from "../static/images/footbtBgbottom.png";
import Vctimgimg1 from "../static/images/vctimgimg1.png";
import Vctimgimg2 from "../static/images/vctimgimg2.png";
import TickSquare from "../static/images/ticksquare.png";
import TickSquareActive from "../static/images/ticksquareActive.png";
import CloseSquare from "../static/images/closesquare.png";
import RightBallIcon from "../static/images/rightBallicon.png";
import Vctimgimg3 from "../static/images/vctimgimg3.png";
import Vctimgimg4 from "../static/images/vctimgimg4.png";
import Testimonial1 from "../static/images/testimonialimg1.png";
import Testimonial2 from "../static/images/testimonialimg2.png";
import TestimonialQuete from "../static/images/testimonial-quete.png";

import { FooterView } from "./footer";
import { HeaderView } from "./header";
import { SimpleSliderView } from "../common/slider";
import { AccordionContentView } from "../common/accordion-content";
import { useNavigate } from "react-router-dom";

export const PricingView = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const [switchActive, setSwitchActive] = useState(false);


    const onChangeFunction = (e) => {
        const el = e?.target;
        el?.style.setProperty("--value", el?.value);
        el?.style.setProperty("--min", el?.min === "" ? "0" : el?.min);
        el?.style.setProperty("--max", el?.max === "" ? "100" : el?.max);
        el?.style.setProperty("--value", el?.value);
    };

    return (
        <>
            <HeaderView />
            <div className="sliderpart pricignslide">
                <img src={RightBallIcon} alt="Right Icon" className="rightprictop" />
                <div className="container-fluid">
                    <div className="row col-lg-6 m-auto">
                        <img src={Vctimgimg3} alt="Vct" className="vctimgpo3" />
                        <h1>The perfect plan for every budget</h1>
                        <img src={Vctimgimg4} alt="Vct" className="vctimgpo4" />
                    </div>
                </div>
            </div>

            <div className="planpricign">
                <div className="container-fluid">
                    <div className="chetoggle">
                        <span>Monthly</span>
                        <input type="checkbox" id="checkbox1" onChange={() => setSwitchActive(!switchActive)} />
                        <label htmlFor="checkbox1"></label>
                        <span className="yearclr">Yearly</span>
                    </div>
                    <div className="row col-lg-10 m-auto">
                        <div className="col-md-4">
                            <div className="pricingboxDs">
                                <h4>Essential</h4>
                                <h1>$0 <span>/ {switchActive ? "Year" : "Month"} </span></h1>
                                <p>The perfect plan for early stage startups that want to launch quickly - can't get any better than this.</p>
                                <ul>
                                    <li><img src={CloseSquare} alt="Close Square" /> 5% fee per transaction*</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> Unlimited pages</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> Unlimited payments</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> Email notifications</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> Weekly reports</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> Customisation options</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> No whitelabel branding</li>
                                </ul>
                                <button className="button-Effect">Choose plan</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricingboxDs activebrder">
                                <h4>Unlimited</h4>
                                <h1>{switchActive ? "$720" : "$60"} <span>/ {switchActive ? "Year" : "Month"}</span></h1>
                                <div className="rangesli">
                                    {/* <img src={RangeSliderImg} alt="Range Slider" /> */}
                                    <RangeSlider min={0} max={100} variant="primary" tooltip="off" onChange={(e) => { onChangeFunction(e) }} />

                                    <h6>{switchActive ? "$60,000" : "$5,000"} volume per {switchActive ? "year" : "month"}</h6>
                                </div>
                                <p>Monthly pricing that automatically adjusts based on your transaction volume.</p>
                                <ul>
                                    <li><img src={TickSquareActive} alt="Close Square" /> No transaction fees</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> Unlimited pages</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> Unlimited payments</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> Email notifications</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> Weekly reports</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> Customisation options</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> No whitelabel branding</li>
                                </ul>
                                <button className="button-Effect">Choose plan</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricingboxDs">
                                <h4>Unlimited +</h4>
                                <h1>$0 <span>/ {switchActive ? "Year" : "Month"}</span></h1>
                                <p>Flexible pricing without monthly fees and a 5% fee per transaction.</p>
                                <ul>
                                    <li><img src={CloseSquare} alt="Close Square" /> 5% fee per transaction*</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> Unlimited pages</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> Unlimited payments</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> Email notifications</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> Weekly reports</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> Customisation options</li>
                                    <li><img src={TickSquare} alt="Tick Square" /> No whitelabel branding</li>
                                </ul>
                                <button className="button-Effect">Choose plan</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-10 col-md-11 m-auto pricihead">
                        <h1>Need a custom plan for your team?</h1>
                        <p>Phonesites is the easiest and fastest way to start collecting leads. Create pages from your phone or desktop in minutes.</p>
                        <button className="ActiveButton button-Effect">Contact Us</button>
                    </div>
                </div>
            </div>

            <div className="clientprt">
                <div className="container-fluid">
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

            <div className="tablepriciView">
                <div className="container-fluid">
                    <div className="col-xl-8 col-lg-10 col-md-11 m-auto">
                        <h1>Choose the right plan for your business</h1>
                        <p>Phonesites is the easiest and fastest way to start collecting leads. Create pages from your phone or desktop in minutes.</p>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Main features</th>
                                <th>Essential</th>
                                <th>Unlimited</th>
                                <th>Unlimited +</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Custom domains</td>
                                <td>1</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td>Subdomains</td>
                                <td>5</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td>Websites</td>
                                <td>5</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td>Landing pages</td>
                                <td>5</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td>Leads limit</td>
                                <td>5</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td>Email automations</td>
                                <td>5</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td>500+ templates</td>
                                <td>5</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td>Share my funnel</td>
                                <td>5</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                        </tbody>
                    </table>

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

            <div className="pricing-faq">
                <div className="container-fluid">
                    <h2>Frequently asked questions</h2>
                    <div className="faq-accordion">
                        <div className='accordioan-container'>
                            <div className="row">
                                <div className="col-md-6">
                                    <AccordionContentView
                                        title={"Can I cancel at any time?"}
                                        index={1}
                                        activeIndex={activeIndex}
                                        setActiveIndex={setActiveIndex}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionContentView>
                                </div>
                                <div className="col-md-6">
                                    <AccordionContentView
                                        title={"Is it really usable on a phone?"}
                                        index={2}
                                        activeIndex={activeIndex}
                                        setActiveIndex={setActiveIndex}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionContentView>
                                </div>
                                <div className="col-md-6">
                                    <AccordionContentView
                                        title={"Can I change my plan later?"}
                                        index={3}
                                        activeIndex={activeIndex}
                                        setActiveIndex={setActiveIndex}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionContentView>
                                </div>
                                <div className="col-md-6">
                                    <AccordionContentView
                                        title={"Can I request a refund?"}
                                        index={4}
                                        activeIndex={activeIndex}
                                        setActiveIndex={setActiveIndex}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionContentView>
                                </div>
                                <div className="col-md-6">
                                    <AccordionContentView
                                        title={"What type of pages can I build?"}
                                        index={5}
                                        activeIndex={activeIndex}
                                        setActiveIndex={setActiveIndex}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionContentView>
                                </div>
                                <div className="col-md-6">
                                    <AccordionContentView
                                        title={"What are Phonesites Coaches?"}
                                        index={6}
                                        activeIndex={activeIndex}
                                        setActiveIndex={setActiveIndex}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionContentView>
                                </div>
                                <div className="col-md-6">
                                    <AccordionContentView
                                        title={"How fast is it to build?"}
                                        index={7}
                                        activeIndex={activeIndex}
                                        setActiveIndex={setActiveIndex}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionContentView>
                                </div>
                                <div className="col-md-6">
                                    <AccordionContentView
                                        title={"Are you developing new features?"}
                                        index={8}
                                        activeIndex={activeIndex}
                                        setActiveIndex={setActiveIndex}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionContentView>
                                </div>
                                <div className="col-md-6">
                                    <AccordionContentView
                                        title={"How long have you been around?"}
                                        index={9}
                                        activeIndex={activeIndex}
                                        setActiveIndex={setActiveIndex}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionContentView>
                                </div>
                                <div className="col-md-6">
                                    <AccordionContentView
                                        title={"Are your page load times fast?"}
                                        index={10}
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

            <div className="footbtpart">
                <div className="overlay_footbtup"></div>
                <img src={FootbtBgTop} alt="" className="footbgtop" />
                <div className="container-fluid">
                    <div className="">
                        <div className="m-auto footdetails">
                            <img src={Vctimgimg1} alt="Vct" className="vctimgpo1" />
                            <h2>See how PAVE completes50,000 inspectionsevery month</h2>
                            <button className="button-Effect cursor-pointer" onClick={() => navigate("/get-started")}>GET STARTED NOW <img src={RightArrow} alt="" /> </button>
                            <img src={Vctimgimg2} alt="Vct" className="vctimgpo2" />
                        </div>
                    </div>
                </div>
                <img src={FootbtBgbottom} alt="" className="footbgbottom" />
            </div>

            <FooterView />
        </>
    )
}