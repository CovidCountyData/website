import React from "react";
import Link from "../../utils/ActiveLink";

const CTATitleButtons = (props) => {
  const { title, buttons } = props;

  return (
    <section className="cta-title-buttons ptb-100">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-sm-10">
            <p>{title}</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            {buttons.map((x) => {
              return (
                <Link key={x.target} href={x.target}>
                  <button type="button" className="btn btn-primary">
                    {x.text}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATitleButtons;
