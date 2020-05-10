import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";
import FaqForm from "../components/Faq/FaqForm";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

class Faq extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarThree />
        <PageBanner pageTitle="Frequently Asked Questions" />
        <FaqContent />

        <div className="pb-100">
          <FaqForm />
        </div>

        <CtaAreaTwo />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Faq;
