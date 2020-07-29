import React from "react";
import NavbarThree from "../components/Layouts/Navbar";
import DownloadBanner from "../components/Download/DownloadBanner";
import DataSubNav from "../components/Data/DataSubNav";
import DownloadFieldDescriptions from "../components/Download/DownloadFieldDescriptions";
import DownloadMoreAPI from "../components/Download/DownloadMoreInApi";

const Download = () => {
  const backref = { title: "Our data", href: "/data" };
  return (
    <React.Fragment>
      <NavbarThree />
      <DataSubNav title="Download data" backref={backref} />
      <DownloadBanner />
      <DownloadFieldDescriptions />
      <hr />
      <DownloadMoreAPI />
    </React.Fragment>
  );
};

export default Download;
