import React from "react";
import CTATitleButtons from "../Common/CTATitleButtons";

const DownloadMoreAPI = () => {
  const title =
    "Customize data and explore additional datasets through our API";
  const buttons = [
    {
      target: "/data/api",
      text: "Use API",
      event: "click use api",
      className: "left-aligned normal-size",
    },
  ];
  return (
    <CTATitleButtons
      title={title}
      buttons={buttons}
      buttonsContainerClassName="row justify-content-left-xs justify-content-center buttons row-sm-none"
    />
  );
};

export default DownloadMoreAPI;
