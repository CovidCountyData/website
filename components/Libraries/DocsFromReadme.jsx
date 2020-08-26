import React from "react";
import Markdown from "react-markdown";
import useRequest from "../../utils/useRequest";
import WIP from "../Common/WIP";
import RegisterFormContainer from "../Register/RegisterFormContainer";
import Loader from "../Shared/Loader";
const ReadmeDocs = (props) => {
  const { url } = props;
  const { data, error } = useRequest(url);

  const contentSplit = () => {
    if (error) {
      return <WIP imgname="undraw_code_thinking_1jeh.svg" />;
    } else if (data) {
      const split = data.split("## Data\n");

      return (
        <React.Fragment>
          <Markdown source={split[0].replace("[on our website](https://covidcountydata.org#register)", "below")} />
          <RegisterFormContainer mini={true} className="register-container" />
          <Markdown source={"## Data\n" + split[1]} />
        </React.Fragment>
      );
    } else {
      return <Loader />;
    }
  };
  // const content = error ? (
  //   <WIP imgname="undraw_code_thinking_1jeh.svg" />
  // ) : data ? (
  //   <React.Fragment>
  //     <Markdown source={data} />
  //   </React.Fragment>
  // ) : (
  //   <Loader />
  // );

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">{contentSplit()}</div>
      </div>
    </div>
  );
};

export default ReadmeDocs;
