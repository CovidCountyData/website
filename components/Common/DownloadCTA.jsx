import React from "react";
import classNames from "classnames";
import CTATitleButtons from "./CTATitleButtons";

const DownloadCTA = (props) => {
  const { className } = props;
  const title =
    "Our data is updated continuously. You can download the data as a csv or use one of our API interfaces.";
  const buttons = [
    {
      target: "/download",
      text: "Download data",
      event: "click download data",
    },
    {
      target: "/data-api",
      text: "Use data API",
      event: "click use api",
    },
  ];

  return (
    <section className={classNames("download-area", className)}>
      <CTATitleButtons title={title} buttons={buttons} />
    </section>
  );
};

export default DownloadCTA;
