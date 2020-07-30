import React from "react";
import ReadmeDocs from "./DocsFromReadme";

const PyDocs = () => {
  const url =
    "https://raw.githubusercontent.com/valorumdata/cmdc.py/master/README.md";
  return <ReadmeDocs url={url} />;
};

export default PyDocs;
