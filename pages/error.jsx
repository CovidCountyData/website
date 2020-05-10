import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ErrorContent from "../components/Error/ErrorContent";
import Footer from "../components/Layouts/Footer";

class Error extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarThree />
        <PageBanner pageTitle="404 Error" />
        <ErrorContent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Error;
