import React from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import PyDocs from "../components/Libraries/PyDocs";

const ServiceDetails = () => {
  return (
    <React.Fragment>
      <NavbarThree />
      <PageBanner pageTitle="Python Client Library" />
      <PyDocs />
    </React.Fragment>
  );
};

export default ServiceDetails;
