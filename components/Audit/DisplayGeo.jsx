import React from "react";
import Slider from "rc-slider";

const DisplayGeo = (props) => {
  const { data, values, setVal, sliderMarks } = props;

  const rows = data.map((dp) => {
    return (
      <tr key={dp.variable}>
        <td>{dp.variable}</td>
        <td>{dp.value}</td>
        <td>
          <Slider
            marks={sliderMarks}
            min={0}
            max={2}
            defaultValue={values[dp.variable]}
            onChange={(v) => setVal(dp.variable, v)}
          />
        </td>
      </tr>
    );
  });
  return (
    <React.Fragment>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">variable</th>
            <th scope="col">value</th>
            <th scope="col">check</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </React.Fragment>
  );
};

export default DisplayGeo;
