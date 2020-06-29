import React from "react";

const Instructions = (props) => {
  const { hasKey, apiKey } = props;
  if (!hasKey || apiKey === "") {
    return (
      <React.Fragment>
        <p>
          Register for a <em>FREE</em> API key by entering your email above and
          pressing the Register button
        </p>
        <p>
          Note that if you have previously registered for an API key, you can
          use the form above to retrieve its value.
        </p>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <p>Your API key is: {apiKey} </p>
      <p>Congratulations on getting your new API key!</p>
      <p>
        Head over to the Client Library or API sections in the Navbar to get
        started accessing the data.
      </p>
    </React.Fragment>
  );
};

export default Instructions;
