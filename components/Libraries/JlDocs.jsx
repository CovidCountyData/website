import ReadmeDocs from "./DocsFromReadme";

const JlDocs = () => {
  const url =
    "https://raw.githubusercontent.com/valorumdata/CMDC.jl/master/README.md";
  return <ReadmeDocs url={url} />;
};

export default JlDocs;
