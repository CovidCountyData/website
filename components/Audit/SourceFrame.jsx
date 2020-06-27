import React, { useEffect, useState } from "react";
import WIP from "../Common/WIP";
import Loader from "../Shared/Loader";
import dynamic from "next/dynamic";

const CSVTable = dynamic(() => import("./CSVTable"), { ssr: false });

const useFetchText = (url) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const isCSV = url.endsWith(".csv");

  useEffect(() => {
    if (!isCSV) {
      return;
    }
    console.log("SourceFrame: I have a csv!!");
    setLoading(true);
    fetch(url)
      .then((resp) => resp.text())
      .then((txt) => {
        setData(txt);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);
  return { isCSV, data, loading, error };
};

const SourceFrame = (props) => {
  const { url } = props;
  const { isCSV, data, loading, error } = useFetchText(url);

  if (!isCSV) {
    return (
      <React.Fragment>
        <iframe src={url} height="800px" width="100%" />
      </React.Fragment>
    );
  }

  if (error) {
    console.log("SourceFrame with an error:", error);
    return <WIP imgname={"undraw_code_thinking_1jeh.svg"} />;
  }

  const content = loading ? <Loader /> : <CSVTable data={data} />;

  return (
    <div className="col-lg-12" style={{ width: "100%", minHeight: "800px" }}>
      {content}
    </div>
  );
};

export default SourceFrame;
