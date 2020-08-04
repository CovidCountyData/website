import ReadmeDocs from "./DocsFromReadme";

const PyDocs = () => {
  const url =
    "https://raw.githubusercontent.com/CovidCountyData/covidcountydataR/master/README.md";
  return <ReadmeDocs url={url} />;
};

export default PyDocs;
