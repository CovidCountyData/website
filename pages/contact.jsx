import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner pageTitle="Keep In Touch" />
        <div className="pt-100">
          <ContactForm />
        </div>

        <div className="ptb-100">
          <Newsletter />
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
