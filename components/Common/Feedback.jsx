import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  items: 1,
  navText: [
    "<i class='pe-7s-angle-left'></i>",
    "<i class='pe-7s-angle-right'></i>",
  ],
};

class Feedback extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <section className="feedback-area ptb-100">
        <div className="container">
          <div className="feedback-list">
            <div className="quotes-icon">
              <img
                src={require("../../images/left-quote-white.png")}
                alt="icon"
              />
            </div>

            {this.state.display ? (
              <OwlCarousel
                className="feedback-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="single-feedback">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                  <div className="bar"></div>
                  <h3>John Smith</h3>
                  <span>CEO & Founder, Envato</span>
                </div>

                <div className="single-feedback">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                  <div className="bar"></div>
                  <h3>Oliver Smith</h3>
                  <span>React JS Specialist</span>
                </div>

                <div className="single-feedback">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                  <div className="bar"></div>
                  <h3>Thomas John</h3>
                  <span>Angular JS Specialist</span>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* Client image */}
        <div className="client-image-box">
          <img
            src={require("../../images/clients/client1.png")}
            className="client1"
            alt="client"
          />
          <img
            src={require("../../images/clients/client2.png")}
            className="client2"
            alt="client"
          />
          <img
            src={require("../../images/clients/client3.png")}
            className="client3"
            alt="client"
          />
          <img
            src={require("../../images/clients/client4.png")}
            className="client4"
            alt="client"
          />
          <img
            src={require("../../images/clients/client5.png")}
            className="client5"
            alt="client"
          />
          <img
            src={require("../../images/clients/client6.png")}
            className="client6"
            alt="client"
          />
          <img
            src={require("../../images/clients/client7.png")}
            className="client7"
            alt="client"
          />
          <img
            src={require("../../images/clients/client8.png")}
            className="client8"
            alt="client"
          />
        </div>
      </section>
    );
  }
}

export default Feedback;
