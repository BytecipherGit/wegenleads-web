import React from "react";
import { FooterView } from "../components/footer";
import { HeaderView } from "../components/header";

export const PageNotFoundView = () => {
    return (
        <>
            <HeaderView />
            <div className="sliderpart">
                <div className="overlay_slider"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h1><span>404</span><br /> Page Not Found</h1>
                        </div>
                    </div>

                </div>
            </div>
            <FooterView />
        </>
    )
}