import React, { useState } from "react";
import useRequest from "../../utils/useRequest";
import NewsComponent from "./NewsComponent";
import WIP from "../Common/WIP";

const News = () => {
  const url = "https://api.covid.valorum.ai/reports";
  const { data, error, loading } = useRequest(url);
  if (data) {
    const news = data.map((item) => {
      return {
        ...item,
        week_end: new Date(item.week_end),
        week_start: new Date(item.week_start),
      };
    });
    const newsItems = news.sort((x, y) =>
      x.week_start > y.week_start ? -1 : 1
    );
    return <NewsComponent newsItems={newsItems} />;
  }

  if (error || loading) {
    return (
      <WIP
        title="Loading Changelog..."
        imgname={"undraw_code_thinking_1jeh.svg"}
      />
    );
  }
};

export default News;
