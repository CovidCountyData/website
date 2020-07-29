import React from "react";
import NavbarThree from "../components/Layouts/Navbar";
import DataSubNav from "../components/Data/DataSubNav";
import DownloadFieldDescriptions from "../components/Download/DownloadFieldDescriptions";
import DownloadMoreAPI from "../components/Download/DownloadMoreInApi";
import DataAPIBanner from "../components/DataAPI/DataAPIBanner";

import dynamic from "next/dynamic";

const RapiDoc = dynamic(
  () => import("../components/Libraries/RapiDocSwagger"),
  { ssr: false }
);

const DataAPI = () => {
  const backref = { title: "Our data", href: "/data" };
  return (
    <React.Fragment>
      <NavbarThree />
      <DataSubNav title="Use Data API" backref={backref} />
      <DataAPIBanner />
      <RapiDoc />
      <hr />
      <DownloadMoreAPI />
    </React.Fragment>
  );
};

export default DataAPI;
