import classNames from "classnames";
import React from "react";
import { useMixpanel } from "./mixpanel";

const ContactCTA = (props) => {
  const { className } = props;
  const cn = classNames("can-banner", "pt-100", className);
  const mixpanel = useMixpanel();
  return (
    <section className={cn}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
        <div className="row can-logo">
          <div className="col">
            <img src={require("../../images/can-dark-bg.svg")} alt="Image" />
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <p>
              After working together for the last seven months, we are joining
              forces with Covid Act Now (CAN). Our team will now have
              considerably more resources and support, and we’re excited to
              expand our reach as we continue to provide you with critical COVID
              data.
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

        <div className="row d-flex">
          <div className="col-md-auto col-sm-12">
            <a
              id="can-button"
              onClick={mixpanel.track("visit can button click")}
              className="btn"
              href="https://covidactnow.org"
            >
              Visit CovidActNow
            </a>
          </div>
        </div>
      </div>


</div>
</div>

    </section>
  );
};

export default ContactCTA;
