import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import Banner from "../components/Data/Banner";
import News from "../components/News/News";
import Purpose from "../components/Data/Purpose";
import Sources from "../components/Data/Sources";
import DataDownloadCTA from "../components/Data/DownloadCTA";
import DataSubNav from "../components/Data/SubNav";

const Data = () => {
  return (
    <React.Fragment>
      <NavbarThree />
      <DataSubNav title={"Our data"} />
      <Banner />
      <Purpose />
      <Sources />
      <DataDownloadCTA />
      <hr />
      <News />
    </React.Fragment>
  );
};

export default Data;
