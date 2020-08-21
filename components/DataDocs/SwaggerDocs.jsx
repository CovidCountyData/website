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
      type="div"
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
  const order = [
    "covid_us",
    "covid_historical",
    "demographics",
    "economic_snapshots",
    "economics",
    "mobility_devices",
    "mobility_locations",
    "hhs",
    "us_counties",
    "us_states",
    "npi_us",
    "covid_global",
    "covidtrackingproject",
    "nytimes_covid",
    "usafacts_covid",
  ];

  return (
    <div className="swagger-docs container pb-100">
      <h2 className="pt-50">Datasets</h2>
      <div className="row header">
        <div className="col-md-3 col-12 dataset">Dataset</div>
        <div className="col-md-3 col-12 table-name">Table name</div>
        <div className="col-md-6 col-12 summary">Summary</div>
      </div>
      {data &&
        Object.keys(data.definitions).map((k, i) => {
          const key = order[i];
          const obj = data.paths["/" + key];
          const definition = data.definitions[key];
          if (!definition) {
            return <div></div>;
          }
          console.log(key, " description: ", definition);
          // const properties = definition['properties']
          return (
            <Accordion className="path-desc">
              <CustomToggle eventKey={i + 1}>
                <div className="col-md-3 col-12 dataset">
                  {definition["name"]}
                </div>
                <div className="table-name col-md-3 col-12">{key}</div>
                <div className="summary col-md-6 col-12">{obj.get.summary}</div>
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
