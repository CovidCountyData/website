import React from "react";
import Link from "../../utils/ActiveLink";
import { useMixpanel } from "./mixpanel";
import MixButton from "./MixButton";

const CTATitleButtons = (props) => {
  const { title, buttons } = props;

  const buttonComponents = buttons.map((x) => {
    return (
      <MixButton event={x.event}>
        <Link key={x.target} href={x.target}>
          <span>{x.text}</span>
        </Link>
      </MixButton>
    );
  });

  return (
    <section className="cta-title-buttons ptb-100">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-sm-10">
            <p>{title}</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-auto">{buttonComponents}</div>
        </div>
      </div>
    </section>
  );
};

export default CTATitleButtons;
