import React from "react";
import WIP from "../Common/WIP";
import useRequest from "../../utils/useRequest";
import Markdown from "react-markdown";
import Loader from "../Shared/Loader";

const PyDocs = () => {
  const url =
    "https://raw.githubusercontent.com/valorumdata/cmdc.py/master/README.md";
  const { data, error } = useRequest(url);

  const content = error ? (
    <WIP imgname="undraw_code_thinking_1jeh.svg" />
  ) : data ? (
    <Markdown source={data} />
  ) : (
    <Loader />
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">{content}</div>
      </div>
    </div>
  );
};

export default PyDocs;
