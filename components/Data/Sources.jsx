import React from "react";

const Sources = () => {
  return (
    <section className="data-sources bg-grey ptb-100">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col section-title">
            <h2>Aggregated from a growing list of sources</h2>
            <p>
              We scrape state dashboards, state databases, and county dashboards
              for county-level data. We also aggregate information from these
              reputable COVID data sources:
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center logos">
          <div className="col-auto">
            <img src={require("../../images/nyt_logo_fixed.svg")} alt="new york times" />
          </div>
          <div className="col-auto">
            <img
              src={require("../../images/ctp_logo.svg")}
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
            <img src={require("../../images/usafacts_logo.svg")} alt="USAFacts" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sources;
