import React, { Component } from "react";

class PageBanner extends Component {
  render() {
    let { pageTitle } = this.props;

    return (
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <h1>{pageTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageBanner;
