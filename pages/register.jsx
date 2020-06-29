import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import RegisterFormContainer from "../components/Register/RegisterFormContainer";

const Contact = () => {
  return (
    <React.Fragment>
      <Navbar />
      <PageBanner pageTitle="API Key Registration" />
      <RegisterFormContainer />
    </React.Fragment>
  );
};

export default Contact;
