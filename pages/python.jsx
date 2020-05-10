import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
// import ServiceDetailsContent from "../components/Libraries/ServiceDetailsContent";
// import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import WIP from "../components/Common/WIP";

class ServiceDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarThree />
        <PageBanner pageTitle="Python Client Library" />
        <WIP imgname="undraw_code_thinking_1jeh.svg" />
        {/* <ServiceDetailsContent /> */}
        {/* <CtaAreaTwo /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default ServiceDetails;
