import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <div className="contact-form">
        <h2>Contact Info</h2>

        <form id="contactForm" data-netlify="true" name="contact">
          <div className="container">
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
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
