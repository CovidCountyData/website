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
          <div className="col-auto">
            <img src={require('../../images/TX.png')} alt="Texas Logo" />
          </div>
          <div className="col-auto">
            <img src={require('../../images/logo-fl-covid-response.svg')} alt="Florida Covid Reponse Logo" />
          </div>
          <div className="col-auto">
            <img style={{ background: "#cccccc" }} src={require('../../images/oregon-gov-color.svg')} alt="Oregon gov logo" />
          </div>
          <div className="col-auto" >
            <svg class="logo-mark"
              style={{ background: "#1f2574", maxHeight: "70px", padding: "5px" }}
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140">
              <title>California for All</title>
              <g class="mark-ca">
                <path class="logo-mark-orange" d="M48.2,83l-13.2,28.6h25.2L48.2,83z M66.7,126.9H28.1l-6,13H0.2l48.7-99.8l44.6,99.8H72.1L66.7,126.9z"></path>
                <polygon class="logo-mark-orange" points="117,42.9 117,122.4 146.9,122.4 146.9,139.9 97.1,139.9 97.1,42.9"></polygon>
                <polygon class="logo-mark-orange" points="170.2,42.9 170.2,122.4 200,122.4 200,139.9 150.2,139.9 150.2,42.9"></polygon>
              </g>
              <g class="mark-all">
                <path class="logo-mark-white" d="M21,8.7c-2-2.2-4.3-3.3-7.1-3.3c-4.6,0-8.4,3.9-8.4,8.7c0,4.8,3.7,8.7,8.4,8.7c2.9,0,5.3-1.2,7.4-3.6l3.4,3.4 c-2.8,3.1-6.6,5.1-10.8,5.1C6.2,27.8,0,21.7,0,14.1C0,6.5,6.2,0.4,13.9,0.4c4.2,0,8.1,2,10.8,5.1L21,8.7z"></path>
                <path class="logo-mark-white" d="M37,11.8l-3.6,7.9h6.9L37,11.8z M42,23.9H31.4l-1.6,3.6h-6L37.1,0l12.3,27.5h-5.9L42,23.9z"></path>
                <polygon class="logo-mark-white" points="56.1,0.8 56.1,22.7 64.3,22.7 64.3,27.5 50.6,27.5 50.6,0.8"></polygon>
                <rect class="logo-mark-white" x="66" y="0.8" width="5.5" height="26.7"></rect>
                <polygon class="logo-mark-orange" points="74.6,27.5 74.6,0.8 89.1,0.8 89.1,5.6 80.1,5.6 80.1,11.1 87.6,11.1 87.6,15.9 80.1,15.9 80.1,27.5"></polygon>
                <path class="logo-mark-orange" d="M95.1,14.1c0,4.8,3.7,8.7,8.4,8.7c4.6,0,8.4-3.9,8.4-8.7c0-4.8-3.8-8.7-8.4-8.7C98.8,5.4,95.1,9.3,95.1,14.1 M117.4,14.1c0,7.6-6.2,13.7-13.9,13.7c-7.7,0-13.9-6.1-13.9-13.7c0-7.6,6.2-13.7,13.9-13.7C111.2,0.4,117.4,6.5,117.4,14.1"></path>
                <path class="logo-mark-orange" d="M125.3,5.6v6.7h2.9c2.3,0,3.9-1.1,3.9-3.4c0-2.2-1.6-3.3-3.9-3.3H125.3z M125.3,16.8v10.6h-5.5V0.8h8.8 c4.9,0,9,3.1,9,8c0,3.1-1.7,5.7-4.2,7l5,11.6h-6L128,16.8H125.3z"></path>
                <polygon class="logo-mark-white" points="159.4,0.8 164.9,0.8 164.9,28.2 145.9,11.6 145.9,27.5 140.4,27.5 140.4,0 159.4,16.6"></polygon>
                <rect x="167.3" y="0.8" class="logo-mark-white" width="5.5" height="26.7"></rect>
                <path class="logo-mark-white" d="M187.2,11.8l-3.6,7.9h6.9L187.2,11.8z M192.3,23.9h-10.6l-1.6,3.6h-6L187.4,0l12.3,27.5h-5.9L192.3,23.9z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sources;
