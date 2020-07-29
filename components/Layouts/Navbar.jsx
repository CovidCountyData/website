import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import Link from "../../utils/ActiveLink";

class Navbar extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <React.Fragment>
        <div id="navbar" className="navbar-area navbar-style-3">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src={require("../../images/ccd_logo.svg")}
                    alt="logo"
                    style={{ height: "3em" }}
                  />
                </a>
              </Link>

              {/* Toggle navigation */}
              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar" />
                <span className="icon-bar middle-bar" />
                <span className="icon-bar bottom-bar" />
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/data">
                      <a className="nav-link">
                        Our Data <i className="icofont-thin-down" />
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/download" activeClassName="active">
                          <a className="nav-link">Download Data</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/data-api" activeClassName="active">
                          <a className="nav-link">Use Data API</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/about" activeClassName="active">
                      <a className="nav-link">About us</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/faq" activeClassName="active">
                      <a className="nav-link">FAQs</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
