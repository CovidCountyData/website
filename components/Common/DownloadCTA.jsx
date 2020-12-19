import React from "react";
import classNames from "classnames";
import CTATitleButtons from "./CTATitleButtons";

const DownloadCTA = (props) => {
  const { className } = props;
  const title =
    "Our data is updated continuously. You can download the data as a csv or use one of our API interfaces.";
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

  return (
    <section className={classNames("download-area", className)}>
      <CTATitleButtons
        title={title}
        buttons={buttons}
        centered={true}
        use={"h2"}
      />
    </section>
  );
};

export default DownloadCTA;
