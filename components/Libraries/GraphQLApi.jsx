import React from "react";
import GraphQLDocs from "./GraphQLDocs"

const GraphQLApi = () => {
  return (
    <React.Fragment>
      <GraphQLDocs />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <iframe
              src="https://api.covid.valorum.ai/graphiql"
              height="800px"
              width="100%"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GraphQLApi;
