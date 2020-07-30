import React, { useEffect, useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { PyDocs, RDocs, JlDocs } from "../Libraries";
import Container from "react-bootstrap/Container";
import dynamic from "next/dynamic";
import GraphQLApi from "../Libraries/GraphQLApi";
import { useMixpanel } from "../Common/mixpanel";
import { useRouter } from "next/router";

const RestAPI = dynamic(() => import("../Libraries/RapiDocSwagger"), {
  ssr: false,
});

const DataApiDocs = () => {
  const [page, setPage] = useState("rest");
  const mixpanel = useMixpanel();
  const router = useRouter();
  const updatePage = (newPage) => {
    mixpanel.track("api doc click", { from: page });
    setPage(newPage);
    router.push(router.pathname + "#" + newPage);
  };

  useEffect(() => {
    router.push(router.pathname + "#" + page);
  });

  return (
    <Container className="pb-100 pt-50 api-docs-tab-panel">
      <Tabs activeKey={page} id="api-docs-tab-panel" onSelect={updatePage}>
        <Tab eventKey="rest" title="Rest API">
          <RestAPI />
        </Tab>
        <Tab eventKey="graphql" title="GraphQL API">
          <GraphQLApi />
        </Tab>
        <Tab eventKey="python" title="Python Client Library">
          <PyDocs />
        </Tab>
        <Tab eventKey="r" title="R Client Library">
          <RDocs />
        </Tab>
        <Tab eventKey="julia" title="Julia Client Library">
          <JlDocs />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default DataApiDocs;
