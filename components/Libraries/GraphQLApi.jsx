import React from "react";

const GraphQLApi = () => {
  return (
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
  );
};

export default GraphQLApi;
