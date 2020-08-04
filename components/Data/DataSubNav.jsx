import React from "react";
import Link from "../../utils/ActiveLink";

const DataSubNav = (props) => {
  const { title, navlinks, backref, backIcon } = props;

  const forward =
    navlinks && navlinks.length > 0
      ? navlinks.map((x) => {
        return (
          <li key={x.title} className="nav-item">
            <Link href={x.href}>
              <a className="nav-link">{x.title}</a>
            </Link>
          </li>
        );
      })
      : [];

  const backIconClass = backIcon ? backIconClass : "pe-7s-angle-left"

  return (
    <div className="data-subnav">
      <div className="container">
        {backref ? (
          <div className="row">
            <nav className="navbar navbar-expand-md navbar-light">
              <div className="collapse navbar-collapse show">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href={backref.href}>
                      <a className="nav-link">
                        <i className={backIconClass} />
                        {backref.title}
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        ) : (
            ""
          )}
        <div className="row">
          <div className="col">
            <h1>{title}</h1>
          </div>
        </div>
        {forward.length == 0 ? (
          ""
        ) : (
            <div className="row">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="collapse navbar-collapse show">
                  <ul className="navbar-nav">{forward}</ul>
                </div>
              </nav>
            </div>
          )}
      </div>
    </div>
  );
};

export default DataSubNav;
