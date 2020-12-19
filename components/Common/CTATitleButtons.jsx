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
        <button
          className={
            x.className ? "btn btn-primary " + x.className : "btn btn-primary"
          }
          onClick={onClick}
        >
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
            {props.use == "h2" ? (
              <h2 className="text-centered left-align-sm">{title}</h2>
            ) : (
              <h1 className="text-centered left-align-sm">{title}</h1>
            )}
          </div>
        </div>
        <div
          className={
            props.buttonsContainerClassName
              ? props.buttonsContainerClassName
              : "row justify-content-center buttons row-sm-none"
          }
        >
          {buttonComponents}
        </div>
      </div>
    </section>
  );
};

export default CTATitleButtons;
