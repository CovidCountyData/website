import React from "react";
import DownloadButton from "./DownloadButton";
import TwoColumnBanner from "../Common/TwoColumnBanner";

function DownloadBanner() {
  const BASE_URL = "https://api.covidcountydata.org/downloads";
  const datasets = [
    {
      name: "All (current date)",
      url: `${BASE_URL}/all_current_date_latest.csv.zip`,
      description:
        "A cross-sectional dataset containing all variables for all locations, for only the most recent date. This dataset is a snapshot of the current status of COVID in all US counties.",
    },
    {
      name: "All (historical)",
      url: `${BASE_URL}/all_timeseries_latest.csv.zip`,
      description:
        "A panel dataset containing all variables for all locations for all available dates. This dataset contains historical snapshots of COVID activity across locations and time.",
    },
    {
      name: "Cases",
      url: `${BASE_URL}/cases_latest.csv.zip`,
      description:
        "A timeseries of the number of COVID-19 cases in each US county.",
    },
    {
      name: "Deaths",
      url: `${BASE_URL}/deaths_latest.csv.zip`,
      description:
        "A timeseries of the number of COVID-19 related deaths in each US county.",
    },
    {
      name: "Hospitalizations",
      url: `${BASE_URL}/hospitalizations_latest.csv.zip`,
      description:
        "A timeseries containing total ICU capacity, usage by any patient, and usage by a COVID-19 positive patient for all US counties. The same three variables are given for the hospital as a whole.",
    },
    {
      name: "Tests",
      url: `${BASE_URL}/tests_latest.csv.zip`,
      description:
        "A timeseries of the number of total, positive, and negative COVID-19 tests in each US county.",
    },
  ];

  const right = (
    <div className="data-download-buttons">
      <div className="container">
        {datasets.map((x) => {
          return <DownloadButton {...x} key={x.name} />;
        })}
      </div>
    </div>
  );
  const title = `
  These CSV files contain the most up-to-date county-level COVID stats. All dates are local to the county being reported.`;
  return <TwoColumnBanner title={title} right={right} />;
}

export default DownloadBanner;
