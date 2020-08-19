import React from "react";
import CTATitleButtons from "../Common/CTATitleButtons";

const DataDownloadCTA = () => {
  const buttons = [
    {
      target: "/data/download",
      text: "Download data",
      event: "click download data",
    },
    {
      target: "/data/api",
      text: "Use data API",
      event: "click use api",
    },
  ];
  const title = "Easily accessible by csv download or our data API";
  return <CTATitleButtons title={title} buttons={buttons} use={"h2"} />;
};

export default DataDownloadCTA;
