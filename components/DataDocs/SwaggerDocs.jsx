import {
  Accordion,
  AccordionCollapse,
  useAccordionToggle,
} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import useRequest from "../../utils/useRequest";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <div
      className="row toggle align-items-center"
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
    </div>
  );
}
const SwaggerDocs = () => {
  const { data, error } = useRequest(
    "https://clean-swagger-inunbrtacq-uk.a.run.app"
  );
  console.log("Swagger:\n", data);
  return (
    <div className="swagger-docs container">
      <h2>Datasets</h2>
      <div className="row header">
        <div className="col-3">Dataset</div>
        <div className="col-3">Table name</div>
        <div className="col-6">Description</div>
      </div>
      {data &&
        Object.keys(data.paths).map((key, i) => {
          const obj = data.paths[key];

          return (
            <Accordion className="path-desc">
              <CustomToggle eventKey={i + 1}>
                <div className="col-3">need name!</div>
                <div className="path col-3">{key}</div>
                <div className="summary col-6">{obj.get.summary}</div>
              </CustomToggle>
              <AccordionCollapse eventKey={i + 1} className="description">
                <ReactMarkdown source={obj.get.description} />
              </AccordionCollapse>
            </Accordion>
          );
        })}

      {error && <div>Error occurred requesing swagger</div>}
    </div>
  );
};

export default SwaggerDocs;
