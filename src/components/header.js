import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../static/images/logo.png";

export const HeaderView = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="navigation-wrap start-header start-style">
                        <nav className="navbar navbar-expand-md navbar-light">

                            <button className="navbar-brand" onClick={() => navigate("/")} ><img src={Logo} alt="logo" /></button>

                            <button className="navbar-toggler" onClick={() => setShow(!show)} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} id="navbarSupportedContent">
                                <ul className="navbar-nav navbar-nav d-flex justify-content-between">
                                    <span className="d-flexRight">
                                        <li className="nav-item ">
                                            <button className={window.location.pathname === "/features" ? "nav-link active" : "nav-link"} onClick={() => navigate("/features")} >Features</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className={window.location.pathname === "/pricing" ? "nav-link active" : "nav-link"} onClick={() => navigate("/pricing")}>Pricing</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className={window.location.pathname === "/examples" ? "nav-link active" : "nav-link"} onClick={() => navigate("/examples")}>Examples</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"} onClick={() => navigate("/about")}>About</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"} onClick={() => navigate("/login")}>login</button>
                                        </li>
                                    </span>
                                    <span className='flexsocial'>
                                        <li className="nav-item">
                                            <button className="nav-link" onClick={() => navigate("/get-started")}>Sign up free</button>
                                        </li>
                                    </span>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}