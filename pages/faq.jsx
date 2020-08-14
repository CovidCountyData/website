import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import FaqContent from "../components/Faq/FaqContent";
import NavbarThree from "../components/Layouts/Navbar";
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
      <PageBanner pageTitle="Frequently asked questions" />
      <FaqContent />

      <div className="pb-100">
        <ContactForm onSubmit={onSubmit} title="Ask us your questions" />
      </div>
    </React.Fragment>
  );
};

export default Faq;
