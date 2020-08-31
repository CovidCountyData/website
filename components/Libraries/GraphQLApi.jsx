import React from "react";
import RegisterFormContainer from "../Register/RegisterFormContainer";
import GraphQLDocs from "./GraphQLDocs";
const GraphQLApi = () => {
  return (
    <React.Fragment>
      <GraphQLDocs />
      <RegisterFormContainer mini={true} className="register-container" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <iframe
              src="https://api.covidcountydata.org/graphiql"
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
