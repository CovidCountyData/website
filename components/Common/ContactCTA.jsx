import React, { Component } from "react";
import Link from "next/link";
import classNames from "classnames";

const ContactCTA = (props) => {
  const { className } = props;
  const cn = classNames("contact-cta-area", "ptb-100", className);
  return (
    <section className={cn}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-auto section-title">
            <h2>How can we help?</h2>
            <p>
              If you are a researcher or policy maker, we’re interested in how
              we can help you find and aggregate relevant data. Please let us
              know what else you’re looking for!
            </p>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <Link href="/contact">
              <button className="btn btn-primary">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
