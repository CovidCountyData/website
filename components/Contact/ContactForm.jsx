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
      <h2>{title}</h2>

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
                ></textarea>
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
