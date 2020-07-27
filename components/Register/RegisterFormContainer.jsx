import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import Instructions from "./Instructions";
import axios from "axios";
import { useMixpanel } from "../Common/mixpanel";

const RegisterFormContainer = () => {
  const [key, setKey] = useState("");
  const [fetchedKey, setFetchedKey] = useState(false);
  const [existingKey, setExistingKey] = useState(false);
  const successfulRequest = (data) => {
    const key = data.data.key;
    if (key) {
      setKey(key);
      setFetchedKey(true);
      return true;
    }
    console.error("Don't have successful key");
    return false;
  };
  const mixpanel = useMixpanel();

  const erroredRequest = (err) => {
    console.error("Got an error requesting an API key: ", err);
    return false;
  };
  const submit = (data) => {
    const url = "https://api.covid.valorum.ai/auth";
    mixpanel.track("User register", data);
    return axios
      .post(url, data)
      .then(successfulRequest)
      .catch((err) => {
        if (err.response) {
          if (err.response.status == 409) {
            // already in use, get api key
            setExistingKey(true);
            return axios
              .get(`${url}/${data.email}`)
              .then(successfulRequest)
              .catch(erroredRequest);
          }
        }
        return erroredRequest(err);
      });
  };

  return (
    <div className="pt-100">
      <RegisterForm onSubmit={submit} title="Get your free API key" />
      <div className="text-content">
        <div className="container">
          <Instructions
            hasKey={fetchedKey}
            apiKey={key}
            existingKey={existingKey}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterFormContainer;
