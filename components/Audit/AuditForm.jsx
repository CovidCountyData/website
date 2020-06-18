import React from "react";
import DisplayGeo from "./DisplayGeo";
import SourceFrame from "./SourceFrame";

const AuditForm = () => {
  const geo = "Maricopa County, Arizona";
  return (
    <div className="container">
      <div className="row section-title ptb-100">
        <div className="col-lg-12">
          <h2>{geo}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <DisplayGeo></DisplayGeo>
        </div>
        <div className="col lg-8">
          <SourceFrame></SourceFrame>
        </div>
      </div>
    </div>
  );
};

export default AuditForm;
