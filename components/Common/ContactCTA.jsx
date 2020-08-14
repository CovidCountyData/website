import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { useMixpanel } from "./mixpanel";

const ContactCTA = (props) => {
  const { className } = props;
  const cn = classNames("contact-cta-area", "ptb-100", className);
  const mixpanel = useMixpanel();
  return (
    <section className={cn}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col section-title">
            <h2>How can we help?</h2>
            <p>
              If you are a researcher or policy maker, we’re interested in how
              we can help you find and aggregate relevant data. Please let us
              know what else you’re looking for!
            </p>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-md-auto col-sm-12">
            <Link href="/contact">
              <a
                onClick={mixpanel.track("contact button click")}
                className="btn btn-primary"
              >
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
