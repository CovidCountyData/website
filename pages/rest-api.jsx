import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
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
        <RapiDoc />
      </React.Fragment>
    );
  }
}

export default ServiceDetails;
