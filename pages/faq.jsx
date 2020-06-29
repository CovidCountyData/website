import React from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";
import ContactForm from "../components/Contact/ContactForm";
import firebaseDB from "../utils/fire";

const Faq = () => {
  const db = firebaseDB();
  const onSubmit = ({ name, email, message }) => {
    const d = new Date();
    const ts = d.toISOString();
    db.collection("questions").add({ name, email, message, ts });
  };
  return (
    <React.Fragment>
      <NavbarThree />
      <PageBanner pageTitle="Frequently Asked Questions" />
      <FaqContent />

      <ContactForm onSubmit={onSubmit} title="Ask us your questions" />
    </React.Fragment>
  );
};

export default Faq;
