import React from "react";
import Button from "react-bootstrap/Button";
import { useMixpanel } from "./mixpanel";

const MixButton = (props) => {
  const { children, event } = props;
  const mixpanel = useMixpanel();
  const onClick = event ? () => mixpanel.track(event) : () => {};
  return <Button onClick={onClick}>{children}</Button>;
};

export default MixButton;
