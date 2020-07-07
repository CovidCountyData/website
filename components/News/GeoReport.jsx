import React from "react";
import SourceVariableList from "./SourceVariableList";

function nSourceVariables(sources) {
  let out = 0;
  for (const src in sources) {
    if (sources.hasOwnProperty(src)) {
      out += sources[src].length;
    }
  }
  return out;
}

const GeoReport = (props) => {
  const { name, sources } = props;
  const nUpdates = nSourceVariables(sources);
  if (nUpdates == 0) {
    return name;
  }
  const varlists = Object.keys(sources).map((src) => {
    return <SourceVariableList key={src} url={src} variables={sources[src]} />;
  });
  return (
    <React.Fragment>
      <span>
        {name} ({nUpdates} variables): {varlists}
      </span>
    </React.Fragment>
  );
};

export default GeoReport;
