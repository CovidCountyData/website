import React from "react";

const SourceFrame = (props) => {
  const { url } = props;
  return (
    <React.Fragment>
      <iframe src={url} height="800px" width="100%" />
    </React.Fragment>
  );
};

export default SourceFrame;
