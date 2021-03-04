import classNames from "classnames";
import React from "react";
import Button from "react-bootstrap/Button";
import { useMixpanel } from "./mixpanel";

const CANBanner = (props) => {
  const { className } = props;
  const mixpanel = useMixpanel();
  return (
    <section className="pt-100 can-banner">
      <div className="justify-content-center d-flex">
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
                  After working together for the last seven months, we are
                  joining forces with Covid Act Now (CAN). Our team will now
                  have considerably more resources and support, and we’re
                  excited to expand our reach as we continue to provide you with
                  critical COVID data.
                </p>
                <p>What does this mean for you?</p>

                <ul>
                  <li>
                    The current Covid County Data (CCD) API will remain
                    available, but any new datasets or expanded data coverage
                    will be integrated solely into the CAN API.
                  </li>
                  <li>
                    (Update on March 4, 2021) API key registration is now
                    required to access our data.
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-auto can-button">
                <a
                  target="_blank"
                  onClick={mixpanel.track("visit can button click")}
                  href="https://covidactnow.org"
                >
                  <Button className="can-home-button">
                    Covid Act Now <i className="icofont-external-link"></i>
                  </Button>
                </a>
              </div>
              <div className="col-auto can-button">
                <a
                  target="_blank"
                  onClick={mixpanel.track("CAN api button click")}
                  href="https://apidocs.covidactnow.org/"
                >
                  <Button className="can-docs-button">
                    CAN API Docs <i className="icofont-external-link"></i>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CANBanner;
