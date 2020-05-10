import React, { Component } from "react";
import Link from "next/link";

class Team extends Component {
  render() {
    return (
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Skilled Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="team-card text-center">
                <img
                  src={require("../../images/team/circle-team1.jpg")}
                  alt="Image"
                  className="rounded-circle"
                />

                <div className="team-caption">
                  <h3>James White</h3>
                  <p>CEO & Founder</p>
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

            <div className="col-lg-3 col-sm-6">
              <div className="team-card text-center">
                <img
                  src={require("../../images/team/circle-team2.jpg")}
                  alt="Image"
                  className="rounded-circle"
                />

                <div className="team-caption">
                  <h3>Johnson Lee</h3>
                  <p>Backend Specialist</p>
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

            <div className="col-lg-3 col-sm-6">
              <div className="team-card text-center">
                <img
                  src={require("../../images/team/circle-team3.jpg")}
                  alt="Image"
                  className="rounded-circle"
                />

                <div className="team-caption">
                  <h3>Williams Smith</h3>
                  <p>Front-end Specialist</p>
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

            <div className="col-lg-3 col-sm-6">
              <div className="team-card text-center">
                <img
                  src={require("../../images/team/circle-team4.jpg")}
                  alt="Image"
                  className="rounded-circle"
                />

                <div className="team-caption">
                  <h3>David Miller</h3>
                  <p>Reactjs Specialist</p>
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
        </div>
      </div>
    );
  }
}

export default Team;
