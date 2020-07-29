import React from "react";
import Link from "../../utils/ActiveLink";

const DataSubNav = (props) => {
  const { title } = props;
  return (
    <div className="data-subnav">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="row">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="collapse navbar-collapse show">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link">Download data</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link">Use data API</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DataSubNav;
