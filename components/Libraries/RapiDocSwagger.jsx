import "rapidoc";
import React from "react";

function RapiDoc() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 rapidoc">
          <rapi-doc
            spec-url="https://clean-swagger-inunbrtacq-uk.a.run.app"
            render-style="view"
            schema-style="table"
            show-header="false"
            layout="column"
            schema-description-expanded="true"
            show-info="true"
            allow-server-selection="false"
            font-size="largest"
            regular-font="Open Sans"
          />
        </div>
      </div>
    </div>
  );
}

export default RapiDoc;
