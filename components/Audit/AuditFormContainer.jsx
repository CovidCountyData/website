import React from "react";
import useRequest from "../../utils/useRequest";
import AuditForm from "./AuditForm";
import Loader from "../Shared/Loader";
import WIP from "../Common/WIP";

const AuditFormContainer = () => {
  const { data, error } = useRequest(
    "https://audits-inunbrtacq-uk.a.run.app/geo"
  );

  const content = error ? (
    <WIP imgname="undraw_code_thinking_1jeh.svg" />
  ) : data ? (
    <AuditForm geography={data} />
  ) : (
    <Loader />
  );

  return <React.Fragment>{content}</React.Fragment>;
};

export default AuditFormContainer;
