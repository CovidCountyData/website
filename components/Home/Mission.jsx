import classNames from "classnames";
import React from "react";

const Mission = (props) => {
  const { className } = props;
  return (
    <section className={classNames("mission-area", className, "ptb-100")}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-10">
            <h2 className="centered left-align-sm">
              Our <span className="emph">mission</span> is to provide
              researchers and policy advisors the data they need to answer key
              questions about COVID-19 and its impact on economic and social
              policies.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
