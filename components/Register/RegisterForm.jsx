import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = (props) => {
  const { onSubmit, title } = props;
  const { register, handleSubmit, reset } = useForm();
  const submit = handleSubmit((data) => {
    onSubmit(data);
    reset();
  });

  return (
    <div className="contact-form">
      <h2>{title}</h2>

      <form id="registerForm" onSubmit={submit}>
        <div className="container">
          <div className="row">
            <div className="col-6 offset-2">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  ref={register}
                  id="name"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div className="col-4">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(x) => console.log("submitting", x)}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
