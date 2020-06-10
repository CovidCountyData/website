import ReadmeDocs from "./DocsFromReadme";

const PyDocs = () => {
  const url =
    "https://raw.githubusercontent.com/valorumdata/cmdcR/master/README.md";
  return <ReadmeDocs url={url} />;
};

export default PyDocs;
