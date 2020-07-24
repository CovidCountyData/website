import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import Newsletter from "../components/Common/Newsletter";
import firebaseDB from "../utils/fire";
import { useMixpanel } from "../components/Common/mixpanel";

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
      to: "spencer.lyon@valorumdata.com",
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
      <PageBanner pageTitle="Keep In Touch" />
      <div className="pt-100">
        <ContactForm onSubmit={contactSubmit} title="Send us a Message" />
      </div>

      <div className="pt-100">
        <Newsletter onSubmit={newsletterSubmit} />
      </div>
    </React.Fragment>
  );
};

export default Contact;
