import React from "react";
import ContactCTA from "../../components/Common/ContactCTA";
import Banner from "../../components/Data/Banner";
import DataSubNav from "../../components/Data/DataSubNav";
import DataDownloadCTA from "../../components/Data/DownloadCTA";
import Purpose from "../../components/Data/Purpose";
import Sources from "../../components/Data/Sources";
import NavbarThree from "../../components/Layouts/Navbar";
import News from "../../components/News/News";

const Data = () => {
  const navlinks = [
    {
      title: "Download data",
      href: "/data/download",
    },
    {
      title: "Use data API",
      href: "/data/api",
    },
    {
      title: "Documentation",
      href: "/data/documentation",
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
      <ContactCTA className="bg-grey" />
      <News />
    </React.Fragment>
  );
};

export default Data;
