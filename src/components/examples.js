import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import { Tab } from "semantic-ui-react";

import TemplateSlider from "../static/images/template-slider.png";
import FeatureRight from "../static/images/featureRight.png";
import FootbtBgTop from "../static/images/footbtBgTop.png";
import FootbtBgbottom from "../static/images/footbtBgbottom.png";
import Vctimgimg1 from "../static/images/vctimgimg1.png";
import Vctimgimg2 from "../static/images/vctimgimg2.png";
import RightArrow from "../static/images/right-arrow.svg";
import ProductImg1 from "../static/images/product-img-1.png";
import ProductImg2 from "../static/images/product-img-2.png";
import ProductImg3 from "../static/images/product-img-3.png";
import ProductImg4 from "../static/images/product-img-4.png";
import ProductImg5 from "../static/images/product-img-5.png";
import ProductImg6 from "../static/images/product-img-6.png";
import ProductImg7 from "../static/images/product-img-7.png";
import ProductImg8 from "../static/images/product-img-8.png";
import ProductImg9 from "../static/images/product-img-9.png";
import ProductImg10 from "../static/images/product-img-10.png";
import ProductImg11 from "../static/images/product-img-11.png";
import ProductImg12 from "../static/images/product-img-12.png";
import SearchIcon from "../static/images/search-icon.svg";

import { FooterView } from "./footer";
import { HeaderView } from "./header";
import { PaginationView } from "../common/pagination";
import { useNavigate } from "react-router-dom";

export const ExamplesView = () => {

    const [pageNumber, setPageNumber] = useState(0);
    // const [totalPages, setTotalPages] = useState(4);
    const navigate = useNavigate();

    return (
        <>
            <HeaderView />

            <div className="sliderpart featureslide">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 align-self-center">
                            <h1>Templates</h1>
                        </div>
                        <div className="col-md-7 align-self-center">
                            <div className="featurerightmar">
                                <img src={TemplateSlider} className="imgright" alt="slider" />
                                <img src={FeatureRight} className="featurerightimg" alt="slider" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="example-filter ">
                <div className="search-box">
                    <div className=" d-flex justify-content-center">
                        <div className="row">
                            <form>
                                <div className="form-group">
                                    <span className="formPositn">
                                        <img src={SearchIcon} className='imgfrmPs' alt='search' />
                                        <input placeholder="Search here anything..." type="text" />
                                        <button type="button" className="ActiveButton">Get started free</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">



                    <p>Industries</p>

                    <div className="industry-filter">

                        <Tabs defaultActiveKey="All-industry" className="m-auto industry-tabs" >

                            <Tab eventKey="All-industry" title="All" />
                            <Tab eventKey="Automotive" title="Automotive" />
                            <Tab eventKey="Beauty, Health" title="Beauty, Health" />
                            <Tab eventKey="Coaching, Courses, Conference" title="Coaching, Courses, Conference" />
                            <Tab eventKey="Construction, Renovation" title="Construction, Renovation" />
                            <Tab eventKey="Consulting" title="Consulting" />

                            <Tab eventKey="Donation, Charity, Foundation" title="Donation, Charity, Foundation" />
                            <Tab eventKey="Energy" title="Energy" />
                            <Tab eventKey="Events, Celebrations" title="Events, Celebrations" />
                            <Tab eventKey="Finance" title="Finance" />
                            <Tab eventKey="Fitness, Sports" title="Fitness, Sports" />
                            <Tab eventKey="Hospitality" title="Hospitality" />
                            <Tab eventKey="Insurance" title="Insurance" />
                            <Tab eventKey="Marketing" title="Marketing" />

                            <Tab eventKey="Medical" title="Medical" />
                            <Tab eventKey="Pets" title="Pets" />
                            <Tab eventKey="Press, Publishing" title="Press, Publishing" />
                            <Tab eventKey="Real Estate" title="Real Estate" />
                            <Tab eventKey="Services" title="Services" />
                            <Tab eventKey="Specialists" title="Specialists" />
                            <Tab eventKey="Web Digital" title="Web Digital" />
                            <Tab eventKey="Lawyers, Attorneys" title="Lawyers, Attorneys" />

                        </Tabs>
                    </div>

                    <p>Template Types</p>

                    <div className="template-filter">

                        <Tabs defaultActiveKey="All-template" className="m-auto template-tabs " >

                            <Tab eventKey="All-template" title="All"  >
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container ">
                                        <img src={ProductImg1} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg2} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg3} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg4} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container">
                                        <img src={ProductImg5} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg6} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg7} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg8} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container">
                                        <img src={ProductImg9} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg10} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg11} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg12} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>

                            </Tab>
                            <Tab eventKey="Short Opt-In Funnel" title="Short Opt-In Funnel" >
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container ">
                                        <img src={ProductImg1} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg2} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg3} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg4} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container">
                                        <img src={ProductImg5} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg6} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg7} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg8} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container">
                                        <img src={ProductImg9} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg10} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg11} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg12} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                            </Tab>
                            <Tab eventKey="Long Opt-In Funnel" title="Long Opt-In Funnel" >
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container ">
                                        <img src={ProductImg1} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg2} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg3} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg4} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container">
                                        <img src={ProductImg5} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg6} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg7} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg8} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container">
                                        <img src={ProductImg9} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg10} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg11} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg12} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                            </Tab>
                            <Tab eventKey="Webinar Funnel" title="Webinar Funnel" >
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container ">
                                        <img src={ProductImg1} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg2} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg3} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg4} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container">
                                        <img src={ProductImg5} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg6} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg7} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg8} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container">
                                        <img src={ProductImg9} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg10} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg11} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg12} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                            </Tab>
                            <Tab eventKey="Survey Funnel" title="Survey Funnel" >
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container ">
                                        <img src={ProductImg1} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg2} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg3} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg4} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container">
                                        <img src={ProductImg5} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg6} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg7} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg8} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container">
                                        <img src={ProductImg9} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg10} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg11} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg12} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                            </Tab>
                            <Tab eventKey="Landing Page" title="Landing Page" >
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container ">
                                        <img src={ProductImg1} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg2} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg3} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg4} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container">
                                        <img src={ProductImg5} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg6} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg7} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg8} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container">
                                        <img src={ProductImg9} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg10} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg11} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg12} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                            </Tab>
                            <Tab eventKey="Digital Business Card" title="Digital Business Card" >
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container ">
                                        <img src={ProductImg1} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg2} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg3} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg4} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container">
                                        <img src={ProductImg5} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg6} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg7} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg8} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                                <div className="row template-container  d-flex justify-content-between " >

                                    <div className="product-container">
                                        <img src={ProductImg9} alt="product" />
                                        <h6> Beauty Salons, SPA,...</h6>
                                        <p>Long opt-in funnel page for beauty salons, SPA, hairdressers</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg10} alt="product" />
                                        <h6> Dentists, Optometrists</h6>
                                        <p>Short opt-in funnel and landing page for dentists, optometrists</p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg11} alt="product" />
                                        <h6> Professional, Speci</h6>
                                        <p>Very bright and attractive digital business card, is ideal </p>
                                    </div>

                                    <div className="product-container">
                                        <img src={ProductImg12} alt="product" />
                                        <h6> Kids' Birthday Parti</h6>
                                        <p>Digital business card for kids' birthday parties planner</p>
                                    </div>

                                </div>
                            </Tab>

                        </Tabs>

                    </div>

                    <div className="paginationBox">
                        <div className="col-md-6">
                            <PaginationView
                                totalPages={4}
                                pageNumber={pageNumber}
                                setPageNumber={setPageNumber}
                            />
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
