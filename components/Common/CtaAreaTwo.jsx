import React, { Component } from "react";

import Link from "next/link";

class CtaAreaTwo extends Component {
  render() {
    return (
      <div className="cta-area-two ptb-100">
        <div className="container">
          <div className="cta-content">
            <span>So What is Next?</span>
            <h3>Are You Ready? Let's get to work!</h3>
          </div>

          <div className="cta-btn-box">
            <Link href="/contact">
              <a className="custom-btn">Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CtaAreaTwo;
