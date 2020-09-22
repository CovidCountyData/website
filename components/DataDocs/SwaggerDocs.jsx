import {
  Accordion,
  AccordionCollapse,
  useAccordionToggle,
} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import useRequest from "../../utils/useRequest";
import { order } from '../datasets'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify'
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  );


  return (
    <div
      className="row toggle align-items-center"
      type="div"
      onClick={decoratedOnClick}
    >
      {children}
    </div>
  );
}
const SwaggerDocs = () => {
  const router = useRouter()
  var activeLink

  if (router.asPath.split('#').length > 1) {
    activeLink = router.asPath.split('#')[1]
  }

  const { data, error } = useRequest(
    "https://clean-swagger-inunbrtacq-uk.a.run.app"
  );
  // console.log("Swagger:\n", data);


  return (
    <div className="swagger-docs container pb-100">
      <h2 className="pt-50">Datasets</h2>
      <div className="row header">
        <div className="col-md-3 col-12 dataset">Dataset</div>
        <div className="col-md-3 col-12 table-name">Table name</div>
        <div className="col-md-6 col-12 summary">Summary</div>
      </div>
      {data &&
        order.map((key, i) => {
          const obj = data.paths["/" + key];
          const definition = data.definitions[key];
          if (!definition) {
            return <div></div>;
          }
          console.log(key, " description: ", definition);
          // const properties = definition['properties']
          return (
            <Accordion className="path-desc" id={key + "_dataset"} defaultActiveKey={(key == activeLink) ? (i + 1) : null}>
              <div id={key} className="hyperlink-anchor" />

              <CustomToggle eventKey={i + 1}>
                <div className="col-md-3 col-12 dataset pre-line">
                  {definition["name"]}
                </div>
                <div className="table-name col-md-3 col-12">{key}</div>
                <div className="summary col-md-6 col-12 pre-line">{obj.get.summary}</div>
              </CustomToggle>
              <AccordionCollapse eventKey={i + 1} className="description">
                <div>
                  <ReactMarkdown source={obj.get.description} />

                </div>
              </AccordionCollapse>
            </Accordion>
          );
        })}

      {error && <div>Error occurred requesing swagger</div>}
    </div>
  );
};

export default SwaggerDocs;
