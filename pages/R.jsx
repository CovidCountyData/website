import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import RDocs from "../components/Libraries/RDocs";

class ServiceDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarThree />
        <PageBanner pageTitle="R Client Library" />
        <RDocs />
      </React.Fragment>
    );
  }
}

export default ServiceDetails;
