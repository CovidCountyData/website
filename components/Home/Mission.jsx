import React from "react";
import classNames from "classnames";

const Mission = (props) => {
  const { className } = props;
  return (
    <section className={classNames("mission-area", className, "ptb-100")}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-10">
            <p>
              Our <span className="emph">mission</span> is to provide
              researchers and policy advisors the data they need to answer key
              questions about COVID-19 and the impact of the economic and social
              policies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
