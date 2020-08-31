import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";

class PrivacyPolicy extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarThree />
        <PageBanner pageTitle="About us" />

        <div className="text-container pt-100 pb-50">
          <div className="container">
            <h2>Covid County Data project</h2>
            <p>
              The COVID-19 pandemic has pushed many researchers and policy advisors to seek to understand and evaluate the costs and risks that policy decisions and proposals would incur. COVID-19 policy decisions will have lasting economic, political, and social consequences, and it is important that these decisions are rooted in reliable data.

            </p>
            <p>
              The Covid County Data project is an initiative with the mandate to aggregate, collect, and distribute reliable data to anyone interested in evaluating these policies. The core values that drive our data collection are:
            </p>
            <ul>
              <li>
                <em>Commitment to open sourced data:</em> This is not proprietary data. We promote diversity of thought by freely and openly distributing the data that we collect and believe that this diversity of opinion is key to finding the answers to the questions that impact our communities.
              </li>
              <li>
                <em>Collaborative research with an interdisciplinary team:</em> While many policy questions could be answered by existing collaborations and labs, we believe the issues at hand are complex, and therefore, inherently interdisciplinary. In order to achieve this level of collaboration, data must be available to everyone, not only select institutions. Our data are already being used by interdisciplinary teams from economics, epidemiology, statistics, and the tech sector.
              </li>
              <li>
                <em>Finding and implementing clean and quality data:</em> Your research is only as strong as your data. All researchers face similar obstacles: data can be difficult to locate, difficult to aggregate, and difficult to validate. We aim to alleviate all three obstacles by digging deep into data sources, evaluating and organizing the information before adding the source to a centralized repository.
              </li>
            </ul>
            <p>
              This project has been made possible through invaluable
              collaborations with researchers, consultants, and academics, and
              with the support of Schmidt Futures and Google Cloud.
            </p>

          </div>
        </div>
        <hr />
        <div className="section partners text-container pt-50 pb-50">
          <div className="container">
            <h3>Partners</h3>
            <p>
              As data aggregators, we’d love to partner with anyone who will find this data valuable. Currently, we’re working closely with Covid Act Now (CAN) and Community Data Platforms (CDP).
            </p>
            <div className="row d-flex justify-content-left logos">
              <div className="col-auto">
                <img src={require("../images/can_logo.png")} alt="" />
              </div>
              <div className="col-auto">
                <img src={require("../images/cdp_logo.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="section founders text-container pb-100 pt-50">
          <div className="container">
            <h3>Founders</h3>
            <p>
              Chase Coleman and Spencer Lyon decided in May 2020 that they wanted to find a way to help people during the global pandemic, so they started working on closing the county-level covid data reporting gap.
            </p>
            <div className="bio row">
              <span className="col-12 col-sm-auto">

                <img src="https://ca.slack-edge.com/T017LV27GFK-U016TJ9QSQ7-9196818be5e7-512" alt="Chase Coleman" />
              </span>
              <span className="col-md-8 col-12">

                <p className="name">Chase Coleman, PhD</p>
                <p>
                  Chase is an NYC-based economist. His research has a broad focus on macroeconomics and covers topics such as international economics, labor markets, student loans, and computational methods. Chase holds holds a master’s degree and PhD in economics from NYU’s Stern School of Business, and received degrees in economics and mathematics from Brigham Young University.
            </p>
              </span>
            </div>

            <div className="bio row">
              <span className="col-12 col-md-auto">

                <img src="https://ca.slack-edge.com/T017LV27GFK-U017EG4REQ4-ff5e12ec16a7-512" alt="Spencer Lyon" />
              </span>
              <span className="col-md-8 col-12">

                <p className="name">Spencer Lyon, PhD</p>
                <p>
                  Spencer is an Orlando-based economist. His research covers a broad range of topics including international trade and risk, labor markets, computational algorithms, and dynamic pricing under uncertainty: the common thread across all these areas is modeling, computation, and algorithm design. At UCF, Spencer is an instructor in the Masters in Data Analytics program and various teaching and training engagements between UCF and local businesses in the central Florida area. Spencer holds a PhD and MPhil in Economics from NYU Stern as well as Bachelor's degrees in Economics and Physics from Brigham Young University.            </p>
              </span>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default PrivacyPolicy;
