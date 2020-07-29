import React from "react";
import DownloadButton from "./DownloadButton";

function DownloadBanner() {
  const datasets = [
    {
      name: "All (current date)",
      url: "#",
      description:
        "A cross-sectional dataset containing all variables for all locations, for only the most recent date. This dataset is a snapshot of the current status of COVID in all US counties.",
    },
    {
      name: "All (timeseries)",
      url: "#",
      description:
        "A panel dataset contianing all variables for all locations for all available dates. This dataset contains historical snapshots of COVID activity across locations and time.",
    },
    {
      name: "Cases",
      url: "#",
      description:
        "A timeseries of the number of COVID-19 cases in each US county.",
    },
    {
      name: "Deaths",
      url: "#",
      description:
        "A timeseries sof the number of COVID-19 related deaths in each US county.",
    },
    {
      name: "Hospitalizations",
      url: "#",
      description:
        "A timeseries containing total ICU capacity, usage by any patient, and usage by a COVID-19 positive patient for all US counties. The same three variables are given for the hospital as a whole.",
    },
    {
      name: "Tests",
      url: "#",
      description:
        "A timeseries of the number of total, positive, and negative COVID-19 tests in each US county.",
    },
  ];
  return (
    <React.Fragment>
      <div className="data-download-banner bg-grey ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <h1>
                These files contain the most up-to-date county-level COVID
                stats. All dates and times are in US Eastern Time (ET). The data
                can be downloaded in either CSV or JSON format.
              </h1>
            </div>
            <div className="col-auto">
              <div className="data-download-buttons">
                <div className="container">
                  {datasets.map((x) => {
                    return <DownloadButton {...x} key={x.name} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DownloadBanner;
