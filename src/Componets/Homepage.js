import React from "react";
import Navbar from "../Componets/Navbar"
import Page from "./Page";
import Projects from "./Projects";
import CardPage from "./CardPage";
import Contactus from "./Contactus";
import Work from "./Work";
import WhosTalking from "./WhosTalking";







function Homepage() {
    return (
        <div>
            <Navbar />
            <Page />
            <CardPage />
            <Projects />
            <Work />
            <WhosTalking />
            <Contactus />
            
          



        </div>
    );
}

export default Homepage
