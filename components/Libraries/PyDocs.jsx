import React from "react";
import ReadmeDocs from "./DocsFromReadme";

const PyDocs = () => {
  const url =
    "https://raw.githubusercontent.com/CovidCountyData/covidcountydata.py/master/README.md";
  return <ReadmeDocs url={url} />;
};

export default PyDocs;
