import React from "react";
import NavbarThree from "../../components/Layouts/Navbar";
import DataSubNav from "../../components/Data/DataSubNav";
import DataAPIBanner from "../../components/DataAPI/DataAPIBanner";
import DataApiDocs from "../../components/DataAPI/DataApiDocs";
import RegisterFormContainer from "../../components/Register/RegisterFormContainer";

const DataAPI = () => {
  const backref = { title: "Our data", href: "/data" };
  return (
    <React.Fragment>
      <NavbarThree />
      <DataSubNav title="Use Data API" backref={backref} />
      <DataAPIBanner />
      <DataApiDocs />
      <RegisterFormContainer className="bg-grey" />
    </React.Fragment>
  );
};
export default DataAPI;
