import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
// import ServiceDetailsContent from "../components/Libraries/ServiceDetailsContent";
// import CtaAreaTwo from "../components/Common/CtaAreaTwo";
// import WIP from "../components/Common/WIP";
import Footer from "../components/Layouts/Footer";
import dynamic from "next/dynamic";

const RapiDoc = dynamic(
  () => import("../components/Libraries/RapiDocSwagger"),
  { ssr: false }
);

class ServiceDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarThree />
        <PageBanner pageTitle="REST API" />
        {/* <RedocStandalone specUr`l="https://clean-swagger-inunbrtacq-uk.a.run.app" /> */}
        <RapiDoc />

        {/* <WIP imgname="undraw_medical_research_qg4d.svg" /> */}
        {/* <ServiceDetailsContent /> */}
        {/* <CtaAreaTwo /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default ServiceDetails;
