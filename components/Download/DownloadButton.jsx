import React from "react";
import ReactGA from "react-ga";
import ReactTooltip from "react-tooltip";
import { useMixpanel } from "../Common/mixpanel";

const DownloadButton = (props) => {
  const { name, url, description } = props;
  const tipName = name + "-tooltip";
  const mixpanel = useMixpanel();

  const onClick = () => {
    ReactGA.event({ category: "download", action: "csv", label: name });
    mixpanel.track(name + " download");
  };

  return (
    <div className="download-button row data-download-button">
      <div className="col d-flex mr-auto">
        <a className="btn btn-primary" href={url} download onClick={onClick}>
          <i className="pe-7s-download" />
          {name}
        </a>
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
