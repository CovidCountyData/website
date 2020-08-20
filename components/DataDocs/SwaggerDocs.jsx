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
  // console.log("Swagger:\n", data);
  const order = ["covid_us",
    "covid_historical",
    "economics",
    "demographics",
    "economic_snapshots",
    "mobility_devices",
    "mobility_locations",
    "hhs",
    "us_counties",
    "us_states",
    "npi_us",
    "covid_global",
    "covidtrackingproject",
    "nytimes_covid",
    "usafacts_covid"]

  return (
    <div className="swagger-docs container pb-100">
      <h2>Datasets</h2>
      <div className="row header">
        <div className="col-3">Dataset</div>
        <div className="col-3">Table name</div>
        <div className="col-6">Description</div>
      </div>
      {data &&
        Object.keys(data.definitions).map((k, i) => {
          const key = order[i]
          const obj = data.paths["/" + key];
          const definition = data.definitions[key];
          if (!definition) {
            return (<div></div>)
          }
          console.log(key, " description: ", definition)
          // const properties = definition['properties']
          return (
            <Accordion className="path-desc">
              <CustomToggle eventKey={i + 1}>
                <div className="col-3">{definition['name']}</div>
                <div className="path col-3">{key}</div>
                <div className="summary col-6">{obj.get.summary}</div>
              </CustomToggle>
              <AccordionCollapse eventKey={i + 1} className="description">
                <div>

                  <ReactMarkdown source={obj.get.description} />
                  {/* <div className="proprties">
                    <h3>Properites</h3>
                    <table className="container">
                      {Object.keys(properties).map(propkey => {

                        return (
                          <tr className="property row">
                            <td className="title col-3">{propkey}</td>
                            <td className="description col-7">
                              {properties[propkey].description}
                            </td>
                            <td className="formal col-1">
                              {properties[propkey].format}
                            </td>
                            <td className="datatype col-1">
                              {properties[propkey].type}
                            </td>
                          </tr>
                        )
                      })}
                    </table>
                  </div> */}
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
