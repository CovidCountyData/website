import React from "react";
import { useMixpanel } from "../components/Common/mixpanel";
import Newsletter from "../components/Common/Newsletter";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import Navbar from "../components/Layouts/Navbar";
import firebaseDB from "../utils/fire";

const Contact = () => {
  const db = firebaseDB();
  const mixpanel = useMixpanel();
  const contactSubmit = ({ name, email, message }) => {
    const d = new Date();
    const ts = d.toISOString();
    const payload = {
      name,
      email,
      originalMsg: message,
      ts,
    };
    db.collection("contacts").add({
      ...payload,
      message: {
        from: email,
        text: message,
        subject: `Message from ${name} at ${ts}`,
        replyTo: email,
      },
      to: ["kristin.stannard@valorumdata.com", "spencer.lyon@valorumdata.com"],
    });
    mixpanel.track("Contact Submit", payload);
  };

  const newsletterSubmit = ({ email }) => {
    const d = new Date();
    const ts = d.toISOString();
    const payload = { email, ts };
    db.collection("newsletter").add(payload);
    mixpanel.track("Newsletter Signup", payload);
  };

  return (
    <React.Fragment>
      <Navbar />
      <PageBanner pageTitle="Keep in touch" />
      <div className="pt-100">
        <ContactForm onSubmit={contactSubmit} title="Send us a message" />
      </div>

      <div className="ptb-100">
        <Newsletter onSubmit={newsletterSubmit} />
      </div>
    </React.Fragment>
  );
};

export default Contact;
