import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";
import firebaseDB from "../utils/fire";

const Contact = () => {
  const db = firebaseDB();
  const contactSubmit = ({ name, email, message }) => {
    const d = new Date();
    const ts = d.toISOString();
    db.collection("contacts").add({
      name,
      email,
      originalMsg: message,
      message: {
        from: email,
        text: message,
        subject: `Message from ${name} at ${ts}`,
        replyTo: email,
      },
      ts,
      to: "spencer.lyon@valorumdata.com",
    });
  };

  const newsletterSubmit = ({ email }) => {
    const d = new Date();
    const ts = d.toISOString();
    db.collection("newsletter").add({ email, ts });
  };

  return (
    <React.Fragment>
      <Navbar />
      <PageBanner pageTitle="Keep In Touch" />
      <div className="pt-100">
        <ContactForm onSubmit={contactSubmit} title="Send us a Message" />
      </div>

      <div className="ptb-100">
        <Newsletter onSubmit={newsletterSubmit} />
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Contact;
