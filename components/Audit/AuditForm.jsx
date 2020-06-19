import React, { useState } from "react";
import DisplayGeo from "./DisplayGeo";
import SourceFrame from "./SourceFrame";

const AuditForm = (props) => {
  const { geography } = props;
  const { name, data } = geography;
  // TODO: make request to endpoint to load county. Needs to return geo,
  // source, and covidData
  const geo = "Los Angeles, California";

  // props for table
  const sliderMarks = {
    0: "WRONG",
    1: "UNKNOWN",
    2: "CORRECT",
  };
  const defaultVals = {};
  data.map((dp) => {
    defaultVals[dp.variable] = 1;
  });
  const [values, setValues] = useState(defaultVals);
  const setVal = (k, val) => {
    const out = { ...values };
    out[k] = val;
    setValues(out);
  };
  console.log(values);

  // props for iframe
  console.log(data.map((x) => x.source));
  const url = data[0].source;

  return (
    <div className="container audit-content">
      <div className="row section-title pt-100">
        <div className="col-lg-12">
          <h2>{name}</h2>
          <p>From {url}</p>
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
            data={data}
            setVal={setVal}
            sliderMarks={sliderMarks}
            values={values}
          />
        </div>
      </div>
      <div className="row source-row">
        <div className="col lg-12">
          <SourceFrame url={url} />
        </div>
      </div>
    </div>
  );
};

export default AuditForm;
