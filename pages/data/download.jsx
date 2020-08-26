import React from "react";
import NavbarThree from "../../components/Layouts/Navbar";
import DownloadBanner from "../../components/Download/DownloadBanner";
import DataSubNav from "../../components/Data/DataSubNav";
import DownloadFieldDescriptions from "../../components/Download/DownloadFieldDescriptions";
import DownloadMoreAPI from "../../components/Download/DownloadMoreInApi";
import CustomDownloads from "../../components/Download/CustomizeDownload";
const Download = () => {
  const backref = { title: "Our data", href: "/data" };
  return (
    <React.Fragment>
      <NavbarThree />
      <DataSubNav title="Download data" backref={backref} />
      <DownloadBanner />
      <div className="container pt-50">
        <div className="col-lg-8 col-xs-10 mx-auto alert alert-danger" role="alert">
          These files contain only county level data and do not aggregate to
          state or national totals
        </div>
      </div>
      <DownloadFieldDescriptions />
      <hr />
      <CustomDownloads />
      <DownloadMoreAPI />
    </React.Fragment>
  );
};

export default Download;
