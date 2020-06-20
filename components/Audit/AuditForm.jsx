import React from "react";
import DisplayGeo from "./DisplayGeo";
import SourceFrame from "./SourceFrame";

const AuditForm = (props) => {
  const { geography, sliderMarks, url, setVal, refresh, sliderValues } = props;
  const { name, data } = geography;

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
            <button type="button" className="btn btn-success btn-lg">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-dark btn-lg"
              onClick={() => refresh()}
            >
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
            values={sliderValues}
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
