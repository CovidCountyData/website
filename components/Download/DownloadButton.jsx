import React from "react";
import ReactTooltip from "react-tooltip";
import MixButton from "../Common/MixButton";

const DownloadButton = (props) => {
  const { name, url, description } = props;
  const tipName = name + "-tooltip";

  return (
    <div className="download-button row data-download-button">
      <div className="col d-flex mr-auto">
        <MixButton event={name + " download"}>
          <a href={url} download>
            <i className="pe-7s-download" />
            {name}
          </a>
        </MixButton>
        <div className="col align-self-center">
          <i
            data-tip
            data-effect="solid"
            data-for={tipName}
            className="pe-7s-info"
          />
        </div>
      </div>
      <ReactTooltip id={tipName} aria-haspopup="true">
        <div className="button-tooltip">
          <p>{description}</p>
        </div>
      </ReactTooltip>
    </div>
  );
};

export default DownloadButton;
