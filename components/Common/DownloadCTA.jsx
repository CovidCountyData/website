import React from "react";
import classNames from "classnames";

const DownloadCTA = (props) => {
  const { className } = props;

  return (
    <section className={classNames("download-area", "ptb-100", className)}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-10">
            <p>
              Our data is updated continuously. You can download the data as csv
              or json files, use our APIs, or use our client libraries.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <button type="button" className="btn btn-primary">
              Download Data
            </button>
            <button type="button" className="btn btn-primary">
              Use API
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
