import React, { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterForm = (props) => {
  const { onSubmit, title } = props;
  const { register, handleSubmit, reset } = useForm();
  const submit = handleSubmit((data) => {
    onSubmit(data).then((worked) => {
      if (worked) {
        reset();
      }
    });
  });

  return (
    <div className="contact-form">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-auto">
            <h2>{title}</h2>
          </div>
          <div className="col-auto">
            <form id="registerForm" onSubmit={submit} className="form-inline">
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  ref={register}
                  id="name"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(x) => console.log("submitting", x)}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
