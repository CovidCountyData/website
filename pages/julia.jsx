import React from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
// import ServiceDetailsContent from "../components/Libraries/ServiceDetailsContent";
// import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import JlDocs from "../components/Libraries/JlDocs";

const ServiceDetails = () => {
  return (
    <React.Fragment>
      <NavbarThree />
      <PageBanner pageTitle="Julia Client Library" />
      <JlDocs />
      <Footer />
    </React.Fragment>
  );
};

export default ServiceDetails;
