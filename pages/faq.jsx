import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import FaqContent from "../components/Faq/FaqContent";
import NavbarThree from "../components/Layouts/Navbar";
import firebaseDB from "../utils/fire";

const Faq = () => {
  const db = firebaseDB();
  const mixpanel = useMixpanel();
  const onSubmit = ({ name, email, message }) => {
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
    mixpanel.track("Question Submit", payload);
  };

  return (
    <React.Fragment>
      <NavbarThree />
      <PageBanner pageTitle="Frequently asked questions" />
      <FaqContent />

      <div className="pb-100">
        <ContactForm onSubmit={onSubmit} title="Ask us your questions" />
      </div>
    </React.Fragment>
  );
};

export default Faq;
