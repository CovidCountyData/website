import React from "react";
import NavbarThree from "../components/Layouts/Navbar";
import Banner from "../components/Data/Banner";
import News from "../components/News/News";
import Purpose from "../components/Data/Purpose";
import Sources from "../components/Data/Sources";
import DataDownloadCTA from "../components/Data/DownloadCTA";
import DataSubNav from "../components/Data/DataSubNav";

const Data = () => {
  const navlinks = [
    {
      title: "Download data",
      href: "/download",
    },
    {
      title: "Use data API",
      href: "/data-api",
    },
  ];

  return (
    <React.Fragment>
      <NavbarThree />
      <DataSubNav title={"Our data"} navlinks={navlinks} />
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
