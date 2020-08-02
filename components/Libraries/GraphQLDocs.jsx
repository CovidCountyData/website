import React from "react";
import Markdown from "react-markdown";

const GraphQLDocs = () => {
  const md = `# GraphQL API

Welcome to the GraphQL documentation for the [Covid County Data](https://covidcountydata.org) (CCD) database.

## Installation

The GraphQL endpoint can be used from any http client capable of issuing POST requests with JSON body. 

There is no additional installation necessary

## API Key

Our data is free and open for anyone to use (and always will be). Our team agreed that this was central to our mission when we agreed to begin this project. However, we do find it useful to have information about our users and to see how they use the data for two reasons:

1. It helps us focus and improve the datasets that are seeing the most use.
2. The number of users, as measured by active API keys, is one metric that we use to show that the
project is useful when we are discussing additional grant funding.

We are grateful to everyone who is willing to register for and use their API key when interacting
with our data.

To register for an API key, you can register [on our website](https://covidcountydata.
org#register).

After obtaining an API key, please attach it as the \`apikey\` header in future requests 

## Data

### Datasets

The easiest way to explore the datasets available via the GraphQL API is to use the open GraphiQL endpoint at [https://api.covidcountydata/graphiql](https://api.covidcountydata/graphiql)/

### Data keys

Many of the datasets in our database are indexed by one or more common "keys". These keys are:

- \`vintage\`: The date and time that the data was downloaded into our database. We collect this
  because of the rapidly evolving nature of COVID-19 -- It allows us to have a record of when data was
  changed/corrected/updated.
- \`dt\`: The date and time that an observation corresponds to. For series like COVID tests
  administered this may a daily frequency, but, for others like unemployment it may be a weekly or
  monthly frequency.
- \`location\`: A geographic identifier for the location. For the counties/states in the dataset,
  this variable corresponds to the Federal Information Processing Standards number.

### Requesting data

In order to request data, you build a graphql as the body of a POST request, then issue the request to [https://api.covidcountydata/graphql](https://api.covidcountydata/graphql).

This is standard practice for GraphQL. If you are unfamiliar with how it works, please see the [official documentation](https://graphql.org/)

## Examples

We will provide a few simple examples of queries you can build, but please feel free to explore in the GraphiQL playground and see what you can come up with

**Simple Example: Single dataset for all FIPS**

\`\`\`graphql
query MyQuery {
  mobilityDevices {
    nodes {
      dt
      location
      value
      variable
    }
  }
}
\`\`\`

**Simple Example: Single dataset for single county**

The example below loads just demographic information for Travis County in Texas.

Notice that we can select a particular geography by specifying the fips code. We can do similar things for any of the keys listed previously.

\`\`\`graphql
query {
  demographics(condition: {location: "48453"}) {
    nodes {
      location
      value
      variable
    }
  }
}
\`\`\`

**Simple Example: Single dataset for all counties in a state**

The example below loads just demographic information for all counties in Texas.

\`\`\`gql
{
  covidUses(filter: {and: {location: {greaterThanOrEqualTo: 48000}}, location: {lessThan: 49000}}) {
    totalCount
    nodes {
      location
      value
      variable
      dt
    }
  }
}

\`\`\`

**Example: Request multiple datasets in one query**

You can request multiple datasets in one query as follows:

\`\`\`gql
{
  query {
    demographics(condition: {location: "6037"}) {
      nodes {
        variable
        value
        location
      }
    }
    covidUses(condition: {location: 6037}) {
      nodes {
        variable
        value
        location
        dt
      }
    }
  }
}
\`\`\`

### Explore

Below we have embedded the GraphiQL playground for you to use as you experiment.

To add your apikey, click the "Headers" button, which will open a panel on the right. You can then add your apikey as a header and it will be sent with all requests.

Enjoy! And please [get in touch](https://covidcountydata.org/contact) if you have questions or need assistance.

`;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Markdown source={md} />
        </div>
      </div>
    </div>
  );
};

export default GraphQLDocs;
