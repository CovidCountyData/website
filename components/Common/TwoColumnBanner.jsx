import React from "react";

function TwoColumnBanner(props) {
  const { title, right, rightColNum } = props;
  const rightColClass = rightColNum ? "col-md-" + rightColNum : "col-auto";
  return (
    <React.Fragment>
      <div className="two-column-banner bg-grey ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 col-sm-12">
              <h1>{title}</h1>
            </div>
            <div className={rightColClass}>{right}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TwoColumnBanner;
