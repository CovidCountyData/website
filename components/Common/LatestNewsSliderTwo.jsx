import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i className='pe-7s-angle-left'></i>",
    "<i className='icofont-thin-double-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

class LatestNewsSlider extends Component {
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
      <section className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Latest News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="blog-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <a>
                          <img
                            src={require("../../images/blog/blog7.jpg")}
                            alt="image"
                          />
                        </a>
                      </Link>

                      <div className="post-tag">
                        <Link href="#">
                          <a>Technology</a>
                        </Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">Feb 15, 2020</span>
                      <h3>
                        <Link href="/blog-details">
                          <a>The Most Popular New top Business Apps</a>
                        </Link>
                      </h3>

                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium.
                      </p>

                      <Link href="/blog-details">
                        <a className="read-more-btn">
                          Read More
                          <i className="icofont-thin-double-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <a>
                          <img
                            src={require("../../images/blog/blog8.jpg")}
                            alt="image"
                          />
                        </a>
                      </Link>

                      <div className="post-tag">
                        <Link href="#">
                          <a>Agency</a>
                        </Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">Feb 16, 2020</span>

                      <h3>
                        <Link href="/blog-details">
                          <a>The Best Marketing top use Management Tools</a>
                        </Link>
                      </h3>

                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium.
                      </p>

                      <Link href="/blog-details">
                        <a className="read-more-btn">
                          Read More
                          <i className="icofont-thin-double-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <a>
                          <img
                            src={require("../../images/blog/blog9.jpg")}
                            alt="image"
                          />
                        </a>
                      </Link>

                      <div className="post-tag">
                        <Link href="#">
                          <a>IT Agency</a>
                        </Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">Feb 17, 2020</span>

                      <h3>
                        <Link href="/blog-details">
                          <a>3 WooCommerce Plugins to Boost Sales</a>
                        </Link>
                      </h3>

                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium.
                      </p>

                      <Link href="/blog-details">
                        <a className="read-more-btn">
                          Read More
                          <i className="icofont-thin-double-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <a>
                          <img
                            src={require("../../images/blog/blog10.jpg")}
                            alt="image"
                          />
                        </a>
                      </Link>

                      <div className="post-tag">
                        <Link href="#">
                          <a>Development</a>
                        </Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">Feb 18, 2020</span>

                      <h3>
                        <Link href="/blog-details">
                          <a>Top 21 Must-Read Blogs For Creative Agencies</a>
                        </Link>
                      </h3>

                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium.
                      </p>

                      <Link href="/blog-details">
                        <a className="read-more-btn">
                          Read More
                          <i className="icofont-thin-double-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default LatestNewsSlider;
