import React from "react";
import TwoColumnBanner from "../Common/TwoColumnBanner";

function Banner(props) {
  const right = (
    <div className="data-description">
      <p>
        All of our data comes from official sources (directly from hospitals or
        governments). We’re spending our time collecting, cleaning, and
        verifying data so you can you spend your time analyzing and informing
        public policies related to the current pandemic.
      </p>
    </div>
  );

  const title =
    "We're collecting the most comprehensive county-level COVID stats";
  return <TwoColumnBanner title={title} right={right} rightColNum={6} />;
}

export default Banner;
