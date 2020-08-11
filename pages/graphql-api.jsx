import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";

class GraphQL extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarThree />
        <PageBanner pageTitle="GraphQL API" />

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
  }
}

export default GraphQL;
