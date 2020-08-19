import React from "react";

function TwoColumnBanner(props) {
  const { title, right, rightColNum } = props;
  const rightColClass = rightColNum ? "col-md-" + rightColNum : "col-auto";
  return (
    <div className="two-column-banner bg-grey ptb-100">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-5 col-sm-12">
            <h2>{title}</h2>
          </div>
          <div className={rightColClass}>{right}</div>
        </div>
      </div>
    </div>
  );
}

export default TwoColumnBanner;
