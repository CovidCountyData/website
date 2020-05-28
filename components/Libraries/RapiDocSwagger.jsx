import React from "react";
import "rapidoc";

function RapiDoc() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default RapiDoc;
