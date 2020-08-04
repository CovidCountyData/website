import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";

class PrivacyPolicy extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarThree />
        <PageBanner pageTitle="About the project" />

        <div className="text-container pt-100">
          <div className="container">
            <h3>CCD: COVID County Data</h3>
            <p>
              The COVID-19 pandemic has pushed many researchers and policy
              advisors to seek to understand and evaluate the costs and risks
              that policy decisions and proposals would incur. COVID-19 policy
              decisions will have lasting economic, political, and social
              consequences, and it is important that these decisions are rooted
              in reliable data.
            </p>
            <p>
              The COVID County Data project is an initiative with the mandate to
              aggregate, collect, and distribute <strong>reliable</strong> data
              to anyone interested in evaluating these policies. Our core values
              are summarized by:
            </p>
            <ul>
              <li>
                <em>This is not proprietary data</em>. We promote diversity of
                thought by freely and openly distributing the data that we
                collect and believe that this diversity of opinion is key to
                finding the answers to the questions that impact our
                communities.
              </li>
              <li>
                <em>This is not a task for a siloed set of researchers</em>.
                While many policy questions could be answered by existing
                collaborations and labs, we believe the issues at hand are
                complex, and therefore, inherently interdisciplinary. In order
                to achieve this level of collaboration, data must be available
                to everyone, not only select institutions.
              </li>
              <li>
                <em>Quality data is key</em>. Your research is only as strong as
                your data. All researchers face similar obstacles: data can be
                difficult to locate, difficult to aggregate, and difficult to
                validate. We aim to alleviate all three obstacles by digging
                deep into data sources, evaluating and organizing the
                information before adding the source to a centralized
                repository.
              </li>
            </ul>
            <p>
              This project has been made possible through invaluable
              collaborations with researchers, consultants, and academics, and
              with the support of Schmidt Futures and Google Cloud.
            </p>
            <p>
              We would love to hear how you and your organization are using the
              data. <a href="/contact">Get in touch!</a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PrivacyPolicy;
