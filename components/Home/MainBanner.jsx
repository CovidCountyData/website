import React, { Component } from "react";
import Particles from "react-particles-js";
import Link from "../../utils/ActiveLink";



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
                  <div className="col-md-6">
                    <div className="main-banner-content">
                      <h1>
                        Access free, up-to-date county-level COVID data to
                        inform local policies
                      </h1>
                      <div className="row">
                        <div className="navbar navbar-light">
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <Link href="/data"><a className="nav-link">See our data <i className="pe-7s-angle-right" /></a></Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-md-6">
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
