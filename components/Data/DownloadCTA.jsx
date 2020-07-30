import React from "react";
import CTATitleButtons from "../Common/CTATitleButtons";

const DataDownloadCTA = () => {
  const buttons = [
    {
      target: "/download",
      text: "Download data",
    },
    {
      target: "/data-api",
      text: "Use data API",
    },
  ];
  const title = "Easily accessible by csv download or our data API";
  return <CTATitleButtons title={title} buttons={buttons} />;
};

export default DataDownloadCTA;
