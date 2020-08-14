import React from "react";
import Link from "../../utils/ActiveLink";
import { useMixpanel } from "./mixpanel";

const CTATitleButtons = (props) => {
  const { title, buttons } = props;
  const mixpanel = useMixpanel();

  const buttonComponents = buttons.map((x) => {
    const onClick = () => {
      mixpanel.track(x.event);
    };
    return (
      <Link key={x.target} href={x.target}>
        <button className="btn btn-primary" onClick={onClick}>
          {x.text}
        </button>
      </Link>
    );
  });

  return (
    <section className="cta-title-buttons ptb-100">
      <div className="container flex">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-sm-10">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="row justify-content-center buttons row-sm-none">
          {buttonComponents}
        </div>
      </div>
    </section>
  );
};

export default CTATitleButtons;
