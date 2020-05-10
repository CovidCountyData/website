import React, { Component } from "react";
import Particles from "react-particles-js";

// Jess thinks maybe make this blue
const particleOpt = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 600,
      },
    },
    color: {
      value: "#000000",
    },
    size: {
      value: 3,
    },
    line_linked: {
      color: "#000000",
      enable_auto: true,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      modes: {
        repulse: {
          distance: 10,
        },
      },
    },
  },
};

class MainBanner extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <React.Fragment>
        <div className="main-banner startup-agency">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="main-banner-content">
                      <h1>COVID Modeling Data Collaborative</h1>
                      <p>
                        <span style={{ display: "inline" }}>OUR MISSION</span>
                        {" "} is to provide researchers and policy advisors
                        the <em>data</em> they need to answer key{" "}
                        <em>questions</em> about COVID-19 and the impact of
                        economic and social policies.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <Particles params={{ ...particleOpt }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainBanner;
