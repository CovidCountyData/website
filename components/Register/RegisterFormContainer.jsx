import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import Instructions from "./Instructions";

const RegisterFormContainer = () => {
  const submit = ({ email }) => {
    console.log(email);
  };

  return (
    <div className="pt-100">
      <RegisterForm onSubmit={submit} title="Get your free API key" />
      <div className="text-content">
        <div className="container">
          <Instructions hasKey={false} />
        </div>
      </div>
    </div>
  );
};

export default RegisterFormContainer;
