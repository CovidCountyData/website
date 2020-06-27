import Markdown from "react-markdown";

const Instructions = () => {
  const md = `## Community Auditing

Help us make sure we always have accurate data!

Below you will see the name of a region or geography from our database.

Beneath the geography name, you will also see a table containing current values of the database.

Beneath the table is an IFrame containing the raw source from which we gathered the data.

We need your help checking the raw source and cofirming that the variables match our table.

You may need to do a little navigating of the IFrame in order to get to the data we are asking for.

As you find the datapoints in the source please use the checkboxes in the table to mark if the data is accurate or not.

When you are all finished, click submit and a new county will be shown!

If you are having trouble with a particular geography you can skip the reporting and ask for a new geography by clicking the "shuffle" button.

Thank you for your help!
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

export default Instructions;
