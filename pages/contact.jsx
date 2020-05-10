import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";
import firebaseDB from "../utils/fire";

const Contact = () => {
  const db = firebaseDB();
  const contactSubmit = ({ name, email, message }) => {
    db.collection("contacts").add({ name, email, message });
  };

  const newsletterSubmit = ({ email }) => {
    db.collection("newsletter").add({ email });
  };
  return (
    <React.Fragment>
      <Navbar />
      <PageBanner pageTitle="Keep In Touch" />
      <div className="pt-100">
        <ContactForm onSubmit={contactSubmit} />
      </div>

      <div className="ptb-100">
        <Newsletter onSubmit={newsletterSubmit} />
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Contact;
