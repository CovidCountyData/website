import React from "react";

const WIP = (props) => {
  const { imgname, title } = props;
  const h2 = title ? title : "Check back soon!";
  return (
    <React.Fragment>
      <div className="wip-page-title">
        <h2>{h2}</h2>
        <img src={require(`../../images/${imgname}`)} alt="map" />
      </div>
    </React.Fragment>
  );
};

export default WIP;
