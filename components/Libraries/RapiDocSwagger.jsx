import "rapidoc";
import React from "react";
import Markdown from 'react-markdown'
import RegisterFormContainer from "../Register/RegisterFormContainer";

function RapiDoc() {
  const info = [`# Rest API

The REST API does not require any software to be installed on your computer, it allows you to
interact with our data through standard web protocols.

Our API is build using [PostgREST](http://postgrest.org/en/v7.0.0/). For more information on the
different features of this API, please see their [documentation](http://postgrest.org/en/v7.0.0/api.html).

## API Key

Our data is free and open for anyone to use (and always will be). Our team agreed that this was central to our mission when we agreed to begin this project. However, we do find it useful to have information about our users and to see how they use the data for two reasons:

1. It helps us focus and improve the datasets that are seeing the most use.
2. The number of users, as measured by active API keys, is one metric that we use to show that the
project is useful when we are discussing additional grant funding.

We are grateful to everyone who is willing to register for and use their API key when interacting
with our data.

To register for an API key, see below.

After obtaining an API key, please attach it as either the \`apikey\` header or query parameter in future requests

For example, if my API key were \`abc123\` and I was getting data from \`https://api.covidcountydata.org/covid_us?fips=eq.6\`, I
would adjust the url to be \`https://api.covidcountydata.org/covid_us?fips=eq.6&apikey=abc123\`
`,


    `## Request structure

In order to be able to request data, you will need to know which endpoint the data comes from and,
optionally, which filters you would like to apply to the data before it's delivered:


**API Endpoints**

The data in our database is broken into tables of related information with a separate endpoint for
each table. For example, all of the U.S. COVID-19 related data is stored in the \`covid_us\` table
and it has a corresponding endpoint of \`https://api.covid.valorum.ai/covid_us\`. For a complete
list of the available endpoints, see the interactive playground near the bottom of the page.


**Filters**

There are a two types of parameters that can be included as filters:

* _Data parameters_: Data parameters are used to select subsets of the data by performing some
  type of comparison between the parameter argument and the data.
* _Keyword parameters_: Keyword parameters interact with how the data is returned. For example,
  \`select\` can modify which columns are returned, \`order\` changes how the data is ordered when it
  is returned, and \`limit\` changes the number of observations returned.

The data parameters that you are able to apply will depend on what columns are available in a
particular dataset. Many of the tables will have the columns \`dt\` (date of the obervation),
\`location\` (a geographical identifier, for the U.S. this is often the fips code), \`variable\` (name
of the variable being observed), and \`value\` (the value of the variable in that location at that
time).

For example, if you wanted to request 5 observations of the \`tests_total\` variable from after
August 1, 2020 then you would use the following query:

\`https://api.covid.valorum.ai/covid_us?dt=gt.2020-08-01&variable=eq.tests_total&limit=5\`

Of course, rather than input this address into your browser, you could query the API for this
information using a more generic tool such as \`curl\` or \`javascript\`.

We make two additional observations:

1. Rather than use \`>\`, \`<\`, \`=\`, etc..., the REST API expects you to use \`gt.\`, \`lt.\`, \`eq.\`,
    etc... For a complete list of comparisons, see [PostgREST documentation](http://postgrest.org/en/v7.0.0/api.html#operators)
2. Much of the data is stored in _long form_ rather than _wide form_. In long form each data
  observation, or value, is associated with its unique identifiers. For example, in many of our
  datasets the identifiers are \`dt\`, \`location\`, and \`variable\`, and the value of the observation
  is stored in \`value\`. This can be seen in the example section below.


### Examples

We will do some examples to illustrate these points using the example table below. We will demonstrate
the example api requests using the \`covid_us\` endpoint (at https://api.covidcountydata.org/covid_us),
but the same concepts apply to all endpoints. Note that we will add \`limit=20\` to most of the requests
below to prevent unnecessary data transfer, but removing this query parameter will allow you to fetch the
whole dataset. Finally, note also that we'll use the same \`apikey=abc123\` argument as shown in the
example above, but the \`abc123\` should be replaced by your API key.

Below is an example table showing the structure of the data returned by the \`covid_us\` endpoint:

| dt         | fips | variable             | value  |
| ---------- | ---- | -------------------- | ------ |
| 2020-06-01 | 6    | deaths_total         | 4251   |
| 2020-06-01 | 12   | deaths_total         | 2543   |
| 2020-06-01 | 48   | deaths_total         | 1678   |
| 2020-06-02 | 6    | deaths_total         | 4286   |
| 2020-06-02 | 12   | deaths_total         | 2613   |
| 2020-06-02 | 48   | deaths_total         | 1698   |
| 2020-06-01 | 6    | positive_tests_total | 113006 |
| 2020-06-01 | 12   | positive_tests_total | 56830  |
| 2020-06-01 | 48   | positive_tests_total | 64880  |
| 2020-06-02 | 6    | positive_tests_total | 115310 |
| 2020-06-02 | 12   | positive_tests_total | 57447  |
| 2020-06-02 | 48   | positive_tests_total | 66568  |


### Only data from CA

In order to select data from only California (fips code 06) we filter the parameter \`location\` to
only be 6

\`https://api.covid.valorum.ai/covid_us?fips=eq.06&limit=20&apikey=abc123\`


### Only observations with more than 100,000 tests

In order to only select observations with more than 100,000 tests, we would want to use the following parameters

\`https://api.covid.valorum.ai/covid_us?variable=eq.positive_tests_total&value=gt.100000&limit=20&apikey=abc123\`


### Only observations after June 1, 2020

In order to only select the data from after June 1, 2020, we would use the following parameter

\`https://api.covid.valorum.ai/covid_us?dt=gt.2020-06-01&limit=20&apikey=abc123\`


### Select total deaths for Texas ordered by date

In order to select only the total deaths variable for Texas and have the results be ordered by date, we would use the following parameters

\`https://api.covid.valorum.ai/covid_us?location=eq.48&variable=eq.positive_tests_total&order=dt&limit=20&apikey=abc123\`


## Software

We use the following open source technologies to build this API.

* The data is hosted in a [PostgreSQL database](https://www.postgresql.org/)
* The API is built using [PostgREST](http://postgrest.org/en/v7.0.0/)
* The documentation is generated using [RapiDoc](https://mrin9.github.io/RapiDoc/).

We are grateful to all of these projects for simplifying the task of building, deploying, and
documenting our API. We are also grateful to Google Cloud for helping us host and distribute our
data.`
  ]
  const rd = () => {
    const result = (<rapi-doc
      spec-url="https://clean-swagger-inunbrtacq-uk.a.run.app"
      render-style="view"
      schema-style="table"
      show-header="false"
      layout="column"
      schema-description-expanded="true"
      show-info="false"
      allow-server-selection="false"
      font-size="largest"
      regular-font="Open Sans"
    />)
    console.log(result)
    return result
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 rapidoc">
          <Markdown source={info[0]} />
          <RegisterFormContainer mini={true} className="register-container" />

          <Markdown source={info[1]} />
          {rd()}
        </div>
      </div>
    </div>
  );
}

export default RapiDoc;
