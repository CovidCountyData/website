import React, { useState } from "react";
import DisplayGeo from "./DisplayGeo";
import SourceFrame from "./SourceFrame";

const AuditForm = () => {
  // TODO: make request to endpoint to load county. Needs to return geo,
  // source, and covidData
  const geo = "Los Angeles, California";

  // props for table
  const sliderMarks = {
    0: "WRONG",
    1: "UNKNOWN",
    2: "CORRECT",
  };
  const covidData = {
    total_deaths: 100,
    total_cases: 1000,
  };
  const defaultVals = {};
  Object.keys(covidData).map((k) => {
    defaultVals[k] = 1;
  });
  const [values, setValues] = useState(defaultVals);
  const setVal = (k, val) => {
    const out = { ...values };
    out[k] = val;
    setValues(out);
  };
  console.log(values);

  // props for iframe
  const url =
    "http://dashboard.publichealth.lacounty.gov/covid19_surveillance_dashboard/";

  return (
    <div className="container audit-content">
      <div className="row section-title pt-100">
        <div className="col-lg-12">
          <h2>{geo}</h2>
        </div>
      </div>
      <div className="row button-row">
        <div className="col-lg-12">
          <div className="btn-group">
            <button type="button" class="btn btn-success btn-lg">
              Submit
            </button>
            <button type="button" class="btn btn-dark btn-lg">
              Shuffle
            </button>
          </div>
        </div>
      </div>
      <div className="row geo-row">
        <div className="col-lg-12">
          <DisplayGeo
            data={covidData}
            setVal={setVal}
            sliderMarks={sliderMarks}
            values={values}
          ></DisplayGeo>
        </div>
      </div>
      <div className="row source-row">
        <div className="col lg-12">
          <SourceFrame url={url}></SourceFrame>
        </div>
      </div>
    </div>
  );
};

export default AuditForm;
