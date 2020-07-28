import React, { Component } from "react";

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='pe-7s-angle-left'></i>",
    "<i class='pe-7s-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

class FeaturedSources extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <section className="featured-services-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-science"></i>
                </div>
                <h3>COVID-19 Exposure</h3>
                <p>
                  Estimating the past, present, and future prevalence of
                  COVID-19 across regions?
                </p>
                <p>
                  We redistribute testing numbers, confirmed cases, deaths, and
                  other measures of a region's potential exposure.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-users"></i>
                </div>
                <h3>Demographic Information</h3>
                <p>
                  Interested in impact of COVID-19 across demographics of
                  certain counties and states?
                </p>
                <p>
                  Explore age, sex, racial, and other demographic
                  characteristics from data sources such as the U.S. Census.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-piggy"></i>
                </div>
                <h3>Economic Data</h3>
                <p>Evaluating the economic impact of different policies?</p>
                <p>
                  We provide access to economic data such as unemployment
                  claims, county level input/output tables, and sectoral
                  production by region.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-bandaid"></i>
                </div>
                <h3>Healthcare Systems and Public Health</h3>
                <p>
                  Analyzing a region's capacity for providing proper health care
                  for new infections?
                </p>
                <p>
                  We aggregate information on EMS calls, hospital capacity, and
                  other important healthcare indicators.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-global"></i>
                </div>
                <h3>International Statistics</h3>
                <p>
                  Comparing outcomes in the United States to outcomes globally?
                </p>
                <p>
                  We provide up to date data from sources like{" "}
                  <a href="https://ourworldindata.org/coronavirus-data">
                    Our World in Data
                  </a>
                  .
                </p>
                <div className="back-text">Ia</div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-hammer"></i>
                </div>
                <h3>Public Policy</h3>
                <p>
                  Do you know when, or what kind of, policy interventions went
                  into place?
                </p>
                <p>
                  We provide detailed accounts of which policies were
                  implemented and when they were lifted for U.S. states,
                  counties, and school districts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedSources;
