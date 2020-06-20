import React, { useState, useEffect, Component } from "react";
import AuditForm from "./AuditForm";
import Loader from "../Shared/Loader";
import WIP from "../Common/WIP";

const useGeoHook = () => {
  // main state -- the geo from server and audit slider values for data points
  const [geo, setGeo] = useState({});
  const [sliderValues, setSliderValues] = useState({});

  // handling intermediate states from making request
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Counter use to issue a re-fetch
  const [counter, setCounter] = useState(0);

  const nowHaveGeo = (geo) => {
    const values = {};
    if (geo.data && geo.data.length > 0) {
      geo.data.map((dp) => {
        values[dp.variable] = 1;
      });
    }
    setSliderValues(values);
    setGeo(geo);
  };

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetch("https://audits-inunbrtacq-uk.a.run.app/geo")
      .then((res) => res.json())
      .then(nowHaveGeo)
      .catch(() => setIsError(true));
    setIsLoading(false);
  }, [counter]);

  return [
    { geo, isLoading, isError, counter, sliderValues },
    { setCounter, setSliderValues },
  ];
};

const AuditFormContainer = () => {
  // Prepare to hold value of audit sliders
  const [
    { geo, isLoading, isError, counter, sliderValues },
    { setCounter, setSliderValues },
  ] = useGeoHook();

  // callback functions for
  const setVal = (k, val) => {
    const out = { ...sliderValues };
    out[k] = val;
    setSliderValues(out);
  };
  const refresh = () => {
    setCounter(counter + 1);
  };

  if (isLoading || isError || !geo.data || geo.data.length === 0) {
    const content =
      isError || (geo.data && geo.data.length === 0) ? (
        <p>Error! Try shuffling</p>
      ) : (
        <Loader />
      );
    return (
      <div className="col-lg-12" style={{ width: "100%", minHeight: "800px" }}>
        {content}
      </div>
    );
  }

  // props for table
  const sliderMarks = {
    0: "WRONG",
    1: "UNKNOWN",
    2: "CORRECT",
  };

  return (
    <AuditForm
      geography={geo}
      sliderMarks={sliderMarks}
      sliderValues={sliderValues}
      url={geo.data[0].source}
      setVal={setVal}
      refresh={refresh}
    />
  );
};

export default AuditFormContainer;
