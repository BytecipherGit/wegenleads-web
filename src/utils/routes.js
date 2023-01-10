import React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from ".";
import { PageNotFoundView } from "../common/page-not-found";
import { AboutView, ExamplesView, FeaturesView, HomeView, PricingView } from "../components";

export const Router = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route exact={true} path="*" element={<PageNotFoundView />} />
                    <Route exact={true} path="/" element={<HomeView />} />
                    <Route exact={true} path="/about" element={<AboutView />} />
                    <Route exact={true} path="/features" element={<FeaturesView />} />
                    <Route exact={true} path="/examples" element={<ExamplesView />} />
                    <Route exact={true} path="/pricing" element={<PricingView />} />
                    <Route exact={true} path="/login" element={<PageNotFoundView />} />
                    <Route exact={true} path="/get-started" element={<PageNotFoundView />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
};
