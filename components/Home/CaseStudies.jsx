import React, { Component } from "react";
import Link from "next/link";

class CaseStudies extends Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <section className="case-studies-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Case Studies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="tab">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                {/* Tab Nav */}
                <ul className="tabs">
                  <li
                    className="current"
                    onClick={(e) => this.openTabSection(e, "tab1")}
                  >
                    <span>UX Process</span>
                  </li>

                  <li onClick={(e) => this.openTabSection(e, "tab2")}>
                    <span>User Experience</span>
                  </li>

                  <li onClick={(e) => this.openTabSection(e, "tab3")}>
                    <span>User Interface</span>
                  </li>

                  <li onClick={(e) => this.openTabSection(e, "tab4")}>
                    <span>Brand</span>
                  </li>

                  <li onClick={(e) => this.openTabSection(e, "tab5")}>
                    <span>Product</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="tab_content">
                  <div id="tab1" className="tabs_item">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg1">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Process</a>
                              </Link>
                            </span>
                            <h3>Designing a better cinema experience</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape1.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg2">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Process</a>
                              </Link>
                            </span>
                            <h3>Building design process within teams</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape2.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg3">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Process</a>
                              </Link>
                            </span>
                            <h3>
                              How Intercom brings play into their design process
                            </h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape3.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg4">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Process</a>
                              </Link>
                            </span>
                            <h3>
                              Stuck with to-do list, I created a new app for
                              myself 
                            </h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape4.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg5">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Process</a>
                              </Link>
                            </span>
                            <h3>Examples of different types of sprints</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape5.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg6">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Process</a>
                              </Link>
                            </span>
                            <h3>Redesigning the New York Times app</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape6.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="tab2" className="tabs_item">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg1">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Experience</a>
                              </Link>
                            </span>
                            <h3>Designing a better cinema experience</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape1.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg2">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Experience</a>
                              </Link>
                            </span>
                            <h3>Building design process within teams</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape2.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg3">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Experience</a>
                              </Link>
                            </span>
                            <h3>
                              How Intercom brings play into their design process
                            </h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape3.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg4">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Experience</a>
                              </Link>
                            </span>
                            <h3>
                              Stuck with to-do list, I created a new app for
                              myself 
                            </h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape4.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg5">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Experience</a>
                              </Link>
                            </span>
                            <h3>Examples of different types of sprints</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape5.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg6">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Experience</a>
                              </Link>
                            </span>
                            <h3>Redesigning the New York Times app</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape6.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="tab3" className="tabs_item">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg1">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Interface</a>
                              </Link>
                            </span>
                            <h3>Designing a better cinema experience</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape1.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg2">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Interface</a>
                              </Link>
                            </span>
                            <h3>Building design process within teams</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape2.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg3">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Interface</a>
                              </Link>
                            </span>
                            <h3>
                              How Intercom brings play into their design process
                            </h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape3.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg4">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Interface</a>
                              </Link>
                            </span>
                            <h3>
                              Stuck with to-do list, I created a new app for
                              myself 
                            </h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape4.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg5">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Interface</a>
                              </Link>
                            </span>
                            <h3>Examples of different types of sprints</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape5.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg6">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Interface</a>
                              </Link>
                            </span>
                            <h3>Redesigning the New York Times app</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape6.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="tab4" className="tabs_item">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg1">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Brand</a>
                              </Link>
                            </span>
                            <h3>Designing a better cinema experience</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape1.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg2">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Brand</a>
                              </Link>
                            </span>
                            <h3>Building design process within teams</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape2.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg3">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Brand</a>
                              </Link>
                            </span>
                            <h3>
                              How Intercom brings play into their design process
                            </h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape3.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg4">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Brand</a>
                              </Link>
                            </span>
                            <h3>
                              Stuck with to-do list, I created a new app for
                              myself 
                            </h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape4.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg5">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Brand</a>
                              </Link>
                            </span>
                            <h3>Examples of different types of sprints</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape4.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg6">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Brand</a>
                              </Link>
                            </span>
                            <h3>Redesigning the New York Times app</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape5.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="tab5" className="tabs_item">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg1">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Product</a>
                              </Link>
                            </span>
                            <h3>Designing a better cinema experience</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape1.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg2">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Product</a>
                              </Link>
                            </span>
                            <h3>Building design process within teams</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape2.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg3">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Product</a>
                              </Link>
                            </span>
                            <h3>
                              How Intercom brings play into their design process
                            </h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape3.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg4">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Product</a>
                              </Link>
                            </span>
                            <h3>
                              Stuck with to-do list, I created a new app for
                              myself 
                            </h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape4.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg5">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Product</a>
                              </Link>
                            </span>
                            <h3>Examples of different types of sprints</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape5.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mt-40">
                        <div className="single-case-studies bg6">
                          <div className="content">
                            <span>
                              <Link href="#">
                                <a>Product</a>
                              </Link>
                            </span>
                            <h3>Redesigning the New York Times app</h3>
                          </div>

                          <Link href="/portfolio-details">
                            <a className="btn btn-primary">View Case Study</a>
                          </Link>

                          <div className="shape">
                            <img
                              src={require("../../images/case-studies/studie-shape6.png")}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CaseStudies;
