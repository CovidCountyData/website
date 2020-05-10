import React, { Component } from "react";
import Link from "next/link";

class TeamStyleFour extends Component {
  render() {
    return (
      <section className="team-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Creative Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-team">
                <div className="team-img">
                  <img
                    src={require("../../images/team/team1.jpg")}
                    alt="image"
                  />

                  <div className="overlay">
                    <p>
                      Email: <span>hello@uxhaven.com</span>
                    </p>

                    <ul>
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
                            <i className="icofont-twitter"></i>
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
                      <li>
                        <Link href="#">
                          <a target="_blank">
                            <i className="icofont-behance"></i>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="team-content">
                  <h3>Jos Buttler</h3>
                  <span>UX Designer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-team">
                <div className="team-img">
                  <img
                    src={require("../../images/team/team2.jpg")}
                    alt="image"
                  />

                  <div className="overlay">
                    <p>
                      Email: <span>hello@uxhaven.com</span>
                    </p>

                    <ul>
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
                            <i className="icofont-twitter"></i>
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
                      <li>
                        <Link href="#">
                          <a target="_blank">
                            <i className="icofont-behance"></i>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="team-content">
                  <h3>Smith John</h3>
                  <span>UI Designer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-team">
                <div className="team-img">
                  <img
                    src={require("../../images/team/team3.jpg")}
                    alt="image"
                  />

                  <div className="overlay">
                    <p>
                      Email: <span>hello@uxhaven.com</span>
                    </p>

                    <ul>
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
                            <i className="icofont-twitter"></i>
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
                      <li>
                        <Link href="#">
                          <a target="_blank">
                            <i className="icofont-behance"></i>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="team-content">
                  <h3>Nick Leaver</h3>
                  <span>Product Designer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-team">
                <div className="team-img">
                  <img
                    src={require("../../images/team/team4.jpg")}
                    alt="image"
                  />

                  <div className="overlay">
                    <p>
                      Email: <span>hello@uxhaven.com</span>
                    </p>

                    <ul>
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
                            <i className="icofont-twitter"></i>
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
                      <li>
                        <Link href="#">
                          <a target="_blank">
                            <i className="icofont-behance"></i>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="team-content">
                  <h3>Olivia Jacob</h3>
                  <span>Interior Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TeamStyleFour;
