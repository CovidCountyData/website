import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Moment from "react-moment";
import GeoReport from "./GeoReport";
import SourceVariableList from "./SourceVariableList";

const NewsComponent = (props) => {
  const { newsItems } = props;
  let items = <p> Content goes here</p>;
  if (newsItems) {
    items = newsItems.map((item) => {
      const startDate = <Moment format="LL">{item.week_start}</Moment>;
      const endDate = <Moment format="LL">{item.week_end}</Moment>;
      const updates = item.updates.map((state) => {
        // Build county updates
        const countyUpdates = state.counties.map(({ name, sources, fips }) => {
          return (
            <li key={`${item.week_start}-${fips}-county`}>
              <GeoReport name={name} sources={sources} />
            </li>
          );
        });
        let countyContent =
          countyUpdates.length > 0 ? (
            <React.Fragment>
              <p>County updates: </p>{" "}
              <ul key={`${item.week_start}-${state.name}-counties`}>
                {countyUpdates}
              </ul>
            </React.Fragment>
          ) : (
            ""
          );

        const stateVariables = Object.keys(state.sources).map((src) => {
          return (
            <SourceVariableList
              key={`${state.name}-${state.week_end}-${src}`}
              url={src}
              variables={state.sources[src]}
            />
          );
        });

        let stateContent =
          stateVariables.length > 0 ? (
            <p> State level variables: {stateVariables} </p>
          ) : (
            ""
          );

        // Return state summary and list of county updates
        return (
          <React.Fragment key={`${state.name}-${state.week_end}-state`}>
            <h4 className="pt-15">{state.name}</h4>
            {stateContent}
            {countyContent}
          </React.Fragment>
        );
      });

      return (
        <AccordionItem key={item.week_start}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Data added between {startDate} and {endDate}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul>{updates}</ul>
          </AccordionItemPanel>
        </AccordionItem>
      );
    });
  }

  return (
    <section className="faq-area ptb-100">
      <div className="container">
        <h2>Changelog</h2>
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="faq-accordion">
              <Accordion>{items}</Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsComponent;
