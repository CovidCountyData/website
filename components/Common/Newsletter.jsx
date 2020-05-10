import React from "react";
import { useForm } from "react-hook-form";

const Newsletter = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();
  const submit = handleSubmit((data) => {
    onSubmit(data);
    reset();
  });
  return (
    <section className="newsletter-area">
      <div className="container">
        <div className="newsletter-inner-area">
          <div className="newsletter-content">
            <span className="sub-title">Get Started Instantly!</span>
            <h2>Get the only new update from this newsletter</h2>

            <form
              className="newsletter-form"
              name="newsletter"
              onSubmit={submit}
            >
              <input
                type="email"
                ref={register}
                className="form-control"
                placeholder="Enter your email"
                name="email"
                required
              />
              <button type="submit">Subscribe!</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
