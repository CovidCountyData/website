import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent from "../components/Libraries/ServiceDetailsContent";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

class ServiceDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarThree />
        <PageBanner pageTitle="Python Client Library" />
        <ServiceDetailsContent />
        <CtaAreaTwo />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ServiceDetails;
