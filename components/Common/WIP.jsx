import React from "react";

const WIP = (props) => {
  const { imgname } = props;
  return (
    <React.Fragment>
      <div className="wip-page-title">
        <h2>Check back soon!</h2>
        <img src={require(`../../images/${imgname}`)} alt="map" />
      </div>
    </React.Fragment>
  );
};

export default WIP;
