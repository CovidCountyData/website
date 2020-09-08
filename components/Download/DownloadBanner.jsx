import React from "react";
import DownloadButton from "./DownloadButton";
import TwoColumnBanner from "../Common/TwoColumnBanner";
import Link from 'next/link'
function DownloadBanner() {
  const datasets = [
    {
      name: "All (current date)",
      url:
        "https://storage.googleapis.com/covidcountydata/downloadables/all_current_date_latest.csv",
      description:
        "A cross-sectional dataset containing all variables for all locations, for only the most recent date. This dataset is a snapshot of the current status of COVID in all US counties.",
    },
    {
      name: "All (historical)",
      url:
        "https://storage.googleapis.com/covidcountydata/downloadables/all_timeseries_latest.csv",
      description:
        "A panel dataset containing all variables for all locations for all available dates. This dataset contains historical snapshots of COVID activity across locations and time.",
    },
    {
      name: "Cases",
      url:
        "https://storage.googleapis.com/covidcountydata/downloadables/cases_latest.csv",
      description:
        "A timeseries of the number of COVID-19 cases in each US county.",
    },
    {
      name: "Deaths",
      url:
        "https://storage.googleapis.com/covidcountydata/downloadables/deaths_latest.csv",
      description:
        "A timeseries of the number of COVID-19 related deaths in each US county.",
    },
    {
      name: "Hospitalizations",
      url:
        "https://storage.googleapis.com/covidcountydata/downloadables/hospitalizations_latest.csv",
      description:
        "A timeseries containing total ICU capacity, usage by any patient, and usage by a COVID-19 positive patient for all US counties. The same three variables are given for the hospital as a whole.",
    },
    {
      name: "Tests",
      url:
        "https://storage.googleapis.com/covidcountydata/downloadables/tests_latest.csv",
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
  Download all county-level covid data or merge with other datasets to customize your downloads. All dates are local to the county being reported.`;
  return (<TwoColumnBanner
    title={title}
    right={right}
    subtitle={
      (<Link href="/data/download#customize-downloads">
        <h3 className="link">
          <span>Customize downloads</span>
          {/* <i className="pe-7s-angle-right" style={{ fontSize: "30px", }} /> */}
        </h3>
      </Link>)}
  />)
}
export default DownloadBanner;
