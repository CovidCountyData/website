import React from "react";
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
    <div
      className={
        props.mini
          ? "contact-form pb-50 pb-sm-0 pb-md-50 mini"
          : "contact-form pb-50 pb-sm-0"
      }
    >
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div name="register">
            <div className="col-auto">
              <h2 className="center-align">{title}</h2>
            </div>
            <div className="col-md-auto col-sm-12">
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
    </div>
  );
};

export default RegisterForm;
