import React from "react";

function Banner(props) {
  return (
    <React.Fragment>
      <div className="data-banner bg-grey ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>
                We're collecting the most comprehensive county-level COVID stats
              </h1>
            </div>
            <div className="col-md-6">
              <div className="data-description">
                <p>
                  All of our data comes from official sources (directly from
                  hospitals or governments). We’re spending our time collecting,
                  cleaning, and verifying data so you can you spend your time
                  analyzing and informing public policies related to the current
                  pandemic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Banner;
