import React, { Component } from "react";
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
                    src={require("../../images/valorumdata-2.png")}
                    className="white-logo"
                    alt="logo"
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
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" activeClassName="active">
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/about" activeClassName="active">
                      <a className="nav-link">About</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">
                        Client Libraries <i className="icofont-thin-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/julia" activeClassName="active">
                          <a className="nav-link">Julia</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/python" activeClassName="active">
                          <a className="nav-link">Python</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/R" activeClassName="active">
                          <a className="nav-link">R</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/rest-api" activeClassName="active">
                      <a className="nav-link">REST API</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/graphql-api" activeClassName="active">
                      <a className="nav-link">GraphQL API</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">Contact Us</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/faq" activeClassName="active">
                      <a className="nav-link">FAQ</a>
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
