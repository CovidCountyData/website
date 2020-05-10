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

class FeedbackTwo extends Component {
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
      <section className="quotes-area bg-fcfbfb">
        <div className="container">
          {this.state.display ? (
            <OwlCarousel
              className="quotes-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="quotes-content">
                <p>
                  Design is not just what it looks like and feels like. Design
                  is how it works.
                </p>
                <h3>Steve Jobs</h3>
                <span>Co-founder of Apple, Inc.</span>
              </div>

              <div className="quotes-content">
                <p>
                  Design is not just what it looks like and feels like. Design
                  is how it works.
                </p>
                <h3>Charlie</h3>
                <span>Co-founder of 3S, Inc.</span>
              </div>

              <div className="quotes-content">
                <p>
                  Design is not just what it looks like and feels like. Design
                  is how it works.
                </p>
                <h3>Amelia</h3>
                <span>Co-founder of Envato, Inc.</span>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
}

export default FeedbackTwo;
