import React from "react";
import "rapidoc";

function RapiDoc() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <rapi-doc
            spec-url="https://api.covid.valorum.ai/swagger.json"
            render-style="view"
            schema-style="table"
            show-header="false"
            layout="column"
            schema-description-expanded="true"
            show-info="true"
            allow-server-selection="false"
          />
        </div>
      </div>
    </div>
  );
}

export default RapiDoc;
