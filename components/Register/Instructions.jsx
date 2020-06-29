import React from "react";

const Instructions = (props) => {
  const { hasKey } = props;
  console.log(props);
  if (!hasKey) {
    return (
      <p>
        Register for a <em>FREE</em> API key by entering your email above and
        pressing the Register button
      </p>
    );
  }

  return (
    <React.Fragment>
      <p>Congratulations on getting your new API key!</p>
      <p>
        Head over to the Client Library or API sections in the Navbar to get
        started accessing your data
      </p>
    </React.Fragment>
  );
};

export default Instructions;
