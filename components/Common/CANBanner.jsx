import classNames from "classnames";
import React from "react";
import Button from "react-bootstrap/Button";
import { useMixpanel } from "./mixpanel";

const CANBanner = (props) => {
  const { className } = props;
  const cn = classNames("can-banner", "pt-100", className);
  const mixpanel = useMixpanel();
  return (
    <div className="can-banner pt-100 justify-content-center d-flex">
      <div className="can-banner-content">
        <div className="row">
          <div className="row can-logo">
            <div className="col-auto">
              <img
                src={require("../../images/can-dark-bg.svg")}
                alt="CAN Logo"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <p>
                After working together for the last seven months, we are joining
                forces with Covid Act Now (CAN). Our team will now have
                considerably more resources and support, and we’re excited to
                expand our reach as we continue to provide you with critical
                COVID data.
              </p>
              <p>What does this mean for you?</p>

              <ul>
                <li>
                  The current Covid County Data (CCD) API will remain available,
                  but any new datasets or expanded data coverage will be
                  integrated solely into the CAN API.
                </li>
                <li>We will soon require registration to access our API</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <div className="can-button">
                <a
                  target="_blank"
                  onClick={mixpanel.track("visit can button click")}
                  className="btn can-button"
                  href="https://covidactnow.org"
                >
                  Covid Act Now <i className="icofont-external-link"></i>
                </a>
                <a
                  target="_blank"
                  onClick={mixpanel.track("visit can button click")}
                  href="https://apidocs.covidactnow.org/"
                >
                  <Button className="can-button can-docs-button border border-light">
                    CAN API Docs <i className="icofont-external-link"></i>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CANBanner;
