import React from "react";

const DataFieldDescription = (props) => {
  const { name, type, description } = props;
  return (
    <div className="dataset-field">
      <div className="dataset-name">{name}</div>
      <div className="dataset-field-type">{type}</div>
      <div className="dataset-field-desc">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DataFieldDescription;
