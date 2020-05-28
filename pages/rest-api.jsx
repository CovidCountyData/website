import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
// import ServiceDetailsContent from "../components/Libraries/ServiceDetailsContent";
// import CtaAreaTwo from "../components/Common/CtaAreaTwo";
// import WIP from "../components/Common/WIP";
import Footer from "../components/Layouts/Footer";
import "rapidoc";

class ServiceDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarThree />
        <PageBanner pageTitle="REST API" />
        {/* <RedocStandalone specUr`l="https://clean-swagger-inunbrtacq-uk.a.run.app" /> */}
        <rapi-doc
          spec-url="https://api.covid.valorum.ai/swagger.json"
          render-style="view"
          schema-style="table"
          show-header="false"
          layout="column"
          schema-description-expanded="true"
          show-info="true"
          allow-server-selection="false"
        />

        {/* <WIP imgname="undraw_medical_research_qg4d.svg" /> */}
        {/* <ServiceDetailsContent /> */}
        {/* <CtaAreaTwo /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default ServiceDetails;
