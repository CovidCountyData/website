import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { useMixpanel } from "../Common/mixpanel";
import moment from 'moment'
const DownloadButton = (props) => {
  const { name, url, description } = props;
  const tipName = name + "-tooltip";
  const mixpanel = useMixpanel();
  const [useURL, setUseURL] = React.useState(url)
  useEffect(() => {
    // Check for existance of current day link
    // /all_current_date_2020-08-11T20:00
    const split = url.split('/')
    const newEnd = split[split.length - 1].replace('latest', moment().format("YYYY-MM-DDThh:00"))

    split.pop()
    split.push(newEnd)
    console.log("new URL: ", split.join('/'))
  }, []) //run only once

  const onClick = () => mixpanel.track(name + " download");

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
