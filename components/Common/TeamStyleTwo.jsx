import React, { Component } from "react";
import Link from "next/link";

class TeamStyleTwo extends Component {
  render() {
    return (
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Expert Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="team-card text-center">
                <div className="team-img">
                  <img
                    src={require("../../images/team/team9.jpg")}
                    alt="Image"
                  />

                  <div className="social-links">
                    <div className="d-table">
                      <div className="d-table-cell">
                        <ul>
                          <li>
                            <Link href="#">
                              <a target="_blank">
                                <i className="icofont-linkedin"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a target="_blank">
                                <i className="icofont-twitter"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a target="_blank">
                                <i className="icofont-facebook"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a target="_blank">
                                <i className="icofont-instagram"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a target="_blank">
                                <i className="icofont-dribbble"></i>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="team-caption">
                  <h3>James White</h3>
                  <p>CEO & Founder</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="team-card text-center">
                <div className="team-img">
                  <img
                    src={require("../../images/team/team10.jpg")}
                    alt="Image"
                  />

                  <div className="social-links">
                    <div className="d-table">
                      <div className="d-table-cell">
                        <ul>
                          <li>
                            <Link href="#">
                              <a target="_blank">
                                <i className="icofont-linkedin"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a target="_blank">
                                <i className="icofont-twitter"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a target="_blank">
                                <i className="icofont-facebook"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a target="_blank">
                                <i className="icofont-instagram"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a target="_blank">
                                <i className="icofont-dribbble"></i>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="team-caption">
                  <h3>Johnson Lee</h3>
                  <p>Backend Specialist</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="team-card text-center">
                <div className="team-img">
                  <img
                    src={require("../../images/team/team11.jpg")}
                    alt="Image"
                  />

                  <div className="social-links">
                    <div className="d-table">
                      <div className="d-table-cell">
                        <ul>
                          <li>
                            <Link href="#">
                              <a target="_blank">
                                <i className="icofont-linkedin"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a target="_blank">
                                <i className="icofont-twitter"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a target="_blank">
                                <i className="icofont-facebook"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a target="_blank">
                                <i className="icofont-instagram"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a target="_blank">
                                <i className="icofont-dribbble"></i>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="team-caption">
                  <h3>Williams Smith</h3>
                  <p>Front-end Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamStyleTwo;
