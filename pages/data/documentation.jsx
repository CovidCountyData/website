import React from "react";
import TwoColumnBanner from "../../components/Common/TwoColumnBanner";
import DataSubNav from "../../components/Data/DataSubNav";
import SwaggerDocs from "../../components/DataDocs/SwaggerDocs";
import NavbarThree from "../../components/Layouts/Navbar";
const Documentation = () => {
  const backref = { title: "Our data", href: "/data" };
  const right = (
    <div className="data-description">
      <p>
        Below we share useful information when accessing data through our APIs.
        Note we’re building open source scrapers to centralize county-level data
        as well as ingesting other helpful covid datasets to redistribute.
      </p>
    </div>
  );

  return (
    <React.Fragment>
      <NavbarThree />
      <DataSubNav title="Documentation" backref={backref} />
      <TwoColumnBanner
        title={
          "Our open source data is, and always will be, free for unlimited public use"
        }
        right={right}
        rightColNum={6}
      />
      <SwaggerDocs />
    </React.Fragment>
  );
};

export default Documentation;
