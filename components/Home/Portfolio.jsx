import React, { Component } from "react";
import Link from "next/link";
import Lightbox from "react-image-lightbox";

const images = [
  require("../../images/portfolio/portfolio1.jpg"),
  require("../../images/portfolio/portfolio2.jpg"),
  require("../../images/portfolio/portfolio3.jpg"),
  require("../../images/portfolio/portfolio4.jpg"),
  require("../../images/portfolio/portfolio5.jpg"),
  require("../../images/portfolio/portfolio6.jpg"),
  require("../../images/portfolio/portfolio7.jpg"),
];

class Portfolio extends Component {
  state = {
    photoIndex: 0,
    isOpenImage: false,
  };

  render() {
    const { photoIndex, isOpenImage } = this.state;

    return (
      <React.Fragment>
        {isOpenImage && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpenImage: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}

        <section className="portfolio-area pt-100">
          <div className="container">
            <div className="section-title">
              <h2>Our Portfolio</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="row m-0">
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-portfolio">
                <img
                  src={require("../../images/portfolio/portfolio1.jpg")}
                  alt="image"
                />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      <a>UX Workflow</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="link-btn">
                      <i className="pe-7s-link"></i>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className="popup-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ photoIndex: 0, isOpenImage: true });
                      }}
                    >
                      <i className="pe-7s-expand1"></i>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="single-portfolio">
                <img
                  src={require("../../images/portfolio/portfolio2.jpg")}
                  alt="image"
                />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      <a>Web Development</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="link-btn">
                      <i className="pe-7s-link"></i>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className="popup-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ photoIndex: 1, isOpenImage: true });
                      }}
                    >
                      <i className="pe-7s-expand1"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-portfolio">
                <img
                  src={require("../../images/portfolio/portfolio3.jpg")}
                  alt="image"
                />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      <a>Web Design</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="link-btn">
                      <i className="pe-7s-link"></i>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className="popup-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ photoIndex: 2, isOpenImage: true });
                      }}
                    >
                      <i className="pe-7s-expand1"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-portfolio">
                <img
                  src={require("../../images/portfolio/portfolio4.jpg")}
                  alt="image"
                />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      <a>React Development</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="link-btn" target="_blank">
                      <i className="pe-7s-link"></i>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className="popup-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ photoIndex: 3, isOpenImage: true });
                      }}
                    >
                      <i className="pe-7s-expand1"></i>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="single-portfolio">
                <img
                  src={require("../../images/portfolio/portfolio5.jpg")}
                  alt="image"
                />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      <a>Mobile Apps Development</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="link-btn" target="_blank">
                      <i className="pe-7s-link"></i>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className="popup-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ photoIndex: 4, isOpenImage: true });
                      }}
                    >
                      <i className="pe-7s-expand1"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-portfolio">
                <img
                  src={require("../../images/portfolio/portfolio6.jpg")}
                  alt="image"
                />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      <a>eCommerce</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="link-btn" target="_blank">
                      <i className="pe-7s-link"></i>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className="popup-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ photoIndex: 5, isOpenImage: true });
                      }}
                    >
                      <i className="pe-7s-expand1"></i>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="single-portfolio">
                <img
                  src={require("../../images/portfolio/portfolio7.jpg")}
                  alt="image"
                />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      <a>UX for Mobile Apps</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="link-btn" target="_blank">
                      <i className="pe-7s-link"></i>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className="popup-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ photoIndex: 6, isOpenImage: true });
                      }}
                    >
                      <i className="pe-7s-expand1"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Portfolio;
