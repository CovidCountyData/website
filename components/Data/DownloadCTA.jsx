import React from "react";

const DataDownloadCTA = () => {
  return (
    <section className="data-download-cta ptb-100">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p>
              Easily accessible by csv download, data API, or client library
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <button type="button" className="btn btn-primary">
              Download data
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

export default DataDownloadCTA;
