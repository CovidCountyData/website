import React from "react";
import { CsvToHtmlTable } from "react-csv-to-table";

const CSVTable = (props) => {
  const { data } = props;
  return (
    <CsvToHtmlTable
      data={data}
      csvDelimiter=","
      tableClassName="table table-striped table-hover"
    />
  );
};

export default CSVTable;
