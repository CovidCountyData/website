import React from "react";
import TwoColumnBanner from "../Common/TwoColumnBanner";

const DataAPIBanner = () => {
  const title = (
    <span>
      API<sub>1.0</sub> documentation
    </span>
  );
  const right = (
    <div className="data-api-description">
      <p>
        This page provides documentation for the data available in our database.
        It contains:
      </p>
      <ul>
        <li>
          A description of the different datasets, the variables in those
          datasets, and from where the datasets were sourced
        </li>
        <li>
          An interactive description of the API which describes the fields and
          allows you to submit sample requests
        </li>
        <li>Instructions to install client libraries to access data</li>
      </ul>
    </div>
  );

  return <TwoColumnBanner title={title} right={right} rightColNum={6} />;
};

export default DataAPIBanner;
