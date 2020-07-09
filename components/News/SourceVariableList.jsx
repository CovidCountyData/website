import React from "react";

const SourceVariableList = (props) => {
  const { url, variables } = props;
  const nvars = variables.length;
  if (nvars == 1) {
    return (
      <span>
        {variables[0]} (<a href={url}>source</a>)
      </span>
    );
  }
  // more than 1 variable
  let varlist =
    variables.slice(0, nvars - 1).join(", ") + ` and ${variables[nvars - 1]}`;
  return (
    <span>
      {varlist} (<a href={url}>source</a>)
    </span>
  );
};

export default SourceVariableList;
