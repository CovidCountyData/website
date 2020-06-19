import React from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Instructions from "../components/Audit/Instructions";
import AuditFormContainer from "../components/Audit/AuditFormContainer";
import Footer from "../components/Layouts/Footer";

const Audit = () => {
  return (
    <React.Fragment>
      <NavbarThree />
      <PageBanner pageTitle="Data Audit" />
      <Instructions />
      <AuditFormContainer />
      <Footer />
    </React.Fragment>
  );
};

export default Audit;
