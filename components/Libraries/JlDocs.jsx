import ReadmeDocs from "./DocsFromReadme";

const JlDocs = () => {
  const url =
    "https://raw.githubusercontent.com/CovidCountyData/CovidCountyData.jl/master/README.md";
  return <ReadmeDocs url={url} />;
};

export default JlDocs;
