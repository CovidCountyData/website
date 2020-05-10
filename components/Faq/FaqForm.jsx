import React, { Component } from "react";

class FaqForm extends Component {
  render() {
    return (
      <div className="contact-form">
        <div className="container">
          <h2>Ask Your Questions</h2>

          <form id="contactForm">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    className="form-control"
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="msg_subject"
                    id="msg_subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    rows="8"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FaqForm;
