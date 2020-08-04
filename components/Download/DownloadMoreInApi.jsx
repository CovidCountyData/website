import React from "react";
import CTATitleButtons from "../Common/CTATitleButtons";

const DownloadMoreAPI = () => {
  const title =
    "Customize data and explore additional datasets through our API";
  const buttons = [
    { target: "/data/api", text: "Use API", event: "click use api" },
  ];
  return <CTATitleButtons title={title} buttons={buttons} />;
};

export default DownloadMoreAPI;
