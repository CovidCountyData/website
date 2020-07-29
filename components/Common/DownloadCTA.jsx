import React from "react";
import classNames from "classnames";
import CTATitleButtons from "./CTATitleButtons";

const DownloadCTA = (props) => {
  const { className } = props;
  const title =
    "Our data is updated continuously. You can download the data as csv or json files, use our APIs, or use our client libraries.";
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

  return (
    <section className={classNames("download-area", className)}>
      <CTATitleButtons title={title} buttons={buttons} />
    </section>
  );
};

export default DownloadCTA;
