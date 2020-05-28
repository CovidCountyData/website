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
        <PageBanner pageTitle="GraphQL API" />
        {/* <WIP imgname="undraw_social_distancing_2g0u.svg" /> */}
        <iframe
          src="https://api.covid.valorum.ai/graphiql"
          height="800px"
          width="100%"
        />
        {/* <ServiceDetailsContent /> */}
        {/* <CtaAreaTwo /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default ServiceDetails;
