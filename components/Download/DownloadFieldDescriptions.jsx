import React from "react";
import DataFieldDescription from "./DataFieldDescription";

const DownloadFieldDescriptions = () => {
  const cumulative = [
    {
      name: "Cases",
      type: "int",
      description: "Total number of cases both confirmed and suspected",
    },
    {
      name: "Deaths",
      type: "int",
      description:
        "Total number of individuals who have died after having been infected with COVID-19",
    },
    {
      name: "Total Tests",
      type: "int",
      description: "Total number of COVID-19 tests that have been administered",
    },
    {
      name: "Positive Tests",
      type: "int",
      description: "Total number of COVID-19 tests with a positive result",
    },
  ];
  const momentInTime = [
    {
      name: "dt",
      type: "date",
      description:
        "Date for which data applies in YYYY-MM-DD format. All dates are reported local to the county for which the data applies",
    },
    {
      name: "county_fips",
      type: "string",
      description: "Five digit US county fips code for the county",
    },
    {
      name: "county_name",
      type: "string",
      description: "The human-readable name for the county",
    },
    {
      name: "Total ICU Capacity",
      type: "int",
      description:
        "Total number of staffed beds in the ICU for all hospitals in region",
    },
    {
      name: "Total ICU Beds in Use",
      type: "int",
      description:
        "Total number of ICU beds in use by any patient (not necessarily COVID)",
    },
    {
      name: "Total ICU Beds In Use (COVID)",
      type: "int",
      description: "Total number ICU beds in use by patients with COVID-19",
    },
    {
      name: "Total Hospital Capacity",
      type: "int",
      description:
        "Total number of staffed hospital beds (in or out of the ICU) for all hospitals in region",
    },
    {
      name: "Total Hospital Beds in Use",
      type: "int",
      description:
        "Total number of hospital beds in use by any patient (not necessarily COVID)",
    },
    {
      name: "Total Hospital Beds In Use (COVID)",
      type: "int",
      description:
        "Total number of hospital beds in use by patients with COVID-19",
    },
  ];
  return (
    <section className="download-field-descriptions ptb-100">
      <div className="container">
        <h2>Field Descriptions</h2>

        <div className="row justify-content-around">
          <div className="col-sm-12 col-md-5 col-lg-5">
            <strong>Cumulative</strong>
            <ul className="variable-list">
              {cumulative.map((x) => {
                return (
                  <li key={x.name + "-desc"}>
                    <DataFieldDescription {...x} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <strong>Moment in Time</strong>
            <ul className="variable-list">
              {momentInTime.map((x) => {
                return (
                  <li key={x.name + "-desc"}>
                    <DataFieldDescription {...x} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadFieldDescriptions;
