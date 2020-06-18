import React from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Instructions from "../components/Audit/Instructions";
import AuditForm from "../components/Audit/AuditForm";

const Audit = () => {
  return (
    <React.Fragment>
      <NavbarThree />
      <PageBanner pageTitle="Data Audit" />
      <Instructions />
      <AuditForm />
    </React.Fragment>
  );
};

export default Audit;
