import React from "react";

const Sources = () => {
  return (
    <section className="data-sources bg-grey ptb-100">
      <div className="container">
        <div className="row d-flex justify-content-center pb-50">
          <div className="col-auto">
            <h2>Aggregated from a growing list of sources</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <img src={require("../../images/nyt.svg")} alt="new york times" />
          </div>
          <div className="col-auto">
            <img
              src={require("../../images/ctp.svg")}
              alt="COVID Tracking Project"
            />
          </div>
          <div className="col-auto">
            <img
              src={require("../../images/owid.svg")}
              alt="Our World in Data"
            />
          </div>
          <div className="col-auto">
            <img src={require("../../images/usa_facts.svg")} alt="USAFacts" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sources;
