import React from "react";
import Slider from "rc-slider";

const DisplayGeo = (props) => {
  const { data, values, setVal, sliderMarks } = props;

  const rows = Object.keys(data).map((k) => {
    return (
      <tr key={k}>
        <td>{k}</td>
        <td>{data[k]}</td>
        <td>
          <Slider
            marks={sliderMarks}
            min={0}
            max={2}
            defaultValue={values[k]}
            onChange={(v) => setVal(k, v)}
          />
        </td>
      </tr>
    );
  });
  console.log(values);
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">variable</th>
            <th scope="col">value</th>
            <th scope="col">check</th>
          </tr>
          {rows}
        </thead>
      </table>
    </React.Fragment>
  );
};

export default DisplayGeo;
