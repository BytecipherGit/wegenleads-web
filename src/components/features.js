import React from "react";
import { FooterView } from "./footer";
import { HeaderView } from "./header";

import RightArrow from "../static/images/right-arrow.svg";
import FootbtBgTop from "../static/images/footbtBgTop.png";
import FootbtBgbottom from "../static/images/footbtBgbottom.png";
import Vctimgimg1 from "../static/images/vctimgimg1.png";
import Vctimgimg2 from "../static/images/vctimgimg2.png";
import NotesIcon from "../static/images/notes-icon.svg";
import NotificationIcon from "../static/images/notification-icon.svg";
import NotespadIcon from "../static/images/notespad-icon.svg";
import NotespadornIcon from "../static/images/notespadorn-icon.svg";
import DuttIcon from "../static/images/dutt-icon.svg";
import HighConverting from "../static/images/high-converting.png";
import BulletIcon from "../static/images/bullet-icon.svg";
import BusinessEasily from "../static/images/business-easily.png";
import FeatureRight from "../static/images/featureRight.png";
import DlLogo1 from "../static/images/dl-logo1.svg";
import DlLogo2 from "../static/images/dl-logo2.svg";
import DlLogo3 from "../static/images/dl-logo3.svg";
import DlLogo4 from "../static/images/dl-logo4.svg";
import DlLogo5 from "../static/images/dl-logo5.svg";
import DlLogo6 from "../static/images/dl-logo6.svg";

import { Image } from "semantic-ui-react";
import { SimpleSliderView } from "../common/slider";

export const FeaturesView = () => {
    return (
        <>
            <HeaderView />

            <div className="sliderpart featureslide">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 align-self-center">
                            <h1>Powerful Features that help grow your business</h1>
                        </div>
                        <div className="col-md-7 align-self-center">
                            <div className="featurerightmar">
                                <img src={BusinessEasily} className="imgright" alt="slider" />
                                <img src={FeatureRight} className="featurerightimg" alt="slider" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="featureSlider featureSlipage">
                <div className="container-fluid">
                    <div className="col-xl-7 col-lg-8 col-md-10 m-auto slidehead">
                        <h1>Proprietary mobile builder</h1>
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

            <div className="training-support">
                <div className="container-fluid">
                    <h1>Automations and tracking <br />made easy</h1>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="trainingDesign">
                                <img src={NotificationIcon} alt="Note" />
                                <h2>Automated emails</h2>
                                <p>Write, schedule, and send follow-ups automatically when someone submits a form.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trainingDesign">
                                <img src={NotesIcon} alt="Note" />
                                <h2>Lead notifications</h2>
                                <p>Any time a new lead comes in, Phonesites will send a notification a new prospect has shown interest.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trainingDesign">
                                <img src={DuttIcon} alt="Note" />
                                <h2>Sync-leadst</h2>
                                <p>Integrate it with any CRM, email software, google sheets, more!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cusServis featureservi">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 cusServisDetsils  align-self-center">
                            <h2>Training and world-class support</h2>
                            <p>Work on files together in real-time, and review and get feedback without the back and forth.</p>
                            <ul>
                                <li><img src={BulletIcon} alt="Bullet Icon" /> Produce more ads without spending more time</li>
                                <li><img src={BulletIcon} alt="Bullet Icon" /> Get notified about comments and status updates</li>
                                <li><img src={BulletIcon} alt="Bullet Icon" /> Have one single source of truth for all design</li>
                            </ul>
                            <button className="ActiveButton">View All Features</button>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <img src={HighConverting} alt="High Converting" className="imgwidth" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="training-support">
                <div className="container-fluid">
                    <h1>AI writer does it for you</h1>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="trainingDesign">
                                <img src={NotificationIcon} alt="Note" />
                                <h2>Features to benefits</h2>
                                <p>Benefits sell, not features. Convert your features to highlight the benefits of your offer.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trainingDesign">
                                <img src={NotesIcon} alt="Note" />
                                <h2>FB & google ads</h2>
                                <p>Ad copy that will make your ads draw in engagement. Custom emojis included!</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trainingDesign">
                                <img src={DuttIcon} alt="Note" />
                                <h2>Headlines</h2>
                                <p>Benefit driven headlines that are perfect for attracting attention.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="favorite-tools featuretools">
                <div className="container-fluid">
                    <h2>Phonesites integrates with 1000+ <span>of your favorite tools.</span></h2>
                    <div className="row m-auto">
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo1} alt="Dl Logo" />
                            <h4>Use On Any Device</h4>
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo2} alt="Dl Logo" />
                            <h4>Use On Any Device</h4>
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo3} alt="Dl Logo" />
                            <h4>Use On Any Device</h4>
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo4} alt="Dl Logo" />
                            <h4>Use On Any Device</h4>
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo5} alt="Dl Logo" />
                            <h4>Use On Any Device</h4>
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <img src={DlLogo6} alt="Dl Logo" />
                            <h4>Use On Any Device</h4>
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
                        <button>GET STARTED NOW <img src={RightArrow} alt="" /> </button>
                        <img src={Vctimgimg2} alt="Vct" className="vctimgpo2" />
                    </div>
                </div>
                <img src={FootbtBgbottom} alt="" className="footbgbottom" />
            </div>
            <FooterView />
        </>
    )
}