import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = (props) => {
  const { onSubmit, title } = props;
  const { register, handleSubmit, reset } = useForm();
  const submit = handleSubmit((data) => {
    onSubmit(data);
    reset();
  });

  return (
    <div className="contact-form">
      <div className="container">
        <h2>{title}</h2>

        <div> We'd love to hear from you. Please reach out if:</div>
        <ul>
          <li>
            You’d like to collaborate. We’re powering Covid Act Now’s models and
            Community Data Platform’s Nantucket Covid dashboard and would love
            to power any other critical local modeling or policy making that
            needs to be done.
          </li>
          <li>
            You know of an official source for county-level data that we do not
            yet have showing up in our own dataset. Please let us know - our
            goal is to get to full county-level coverage of the US population.
          </li>
          <li>
            You see an error in our data. We can’t fix what we don’t know is
            broken, so please tell us if you see something that looks off.
          </li>
        </ul>
      </div>

      <form id="contactForm" onSubmit={submit}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  ref={register}
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
                  ref={register}
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
                  ref={register}
                  className="form-control"
                  id="message"
                  rows="8"
                  placeholder="Your Message"
                  required
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(x) => console.log("submitting", x)}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
