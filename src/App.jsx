import React, { useState } from "react";
import InputField from "./components/InputField";
import "./app.scss";
import { emailValidation, nameValidation } from "./validation/formValidation";

const App = () => {
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    queryType: "",
    consentBtn: false,
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    queryType: "",
    consentBtn: "",
  });

  // handle input fields
  const handleInputField = (e) => {
    const inputFieldInfo = { ...inputField };
    inputFieldInfo[e.target.name] = e.target.value;

    // check if the input is a checkbox and handle its checked state
    if (e.target.type === "checkbox") {
      inputFieldInfo[e.target.name] = e.target.checked;
    } else {
      inputFieldInfo[e.target.name] = e.target.value;
    }
    setInputField(inputFieldInfo);
  };

  // handle submit
  const handleSubmit = (e) => {
    // error handeling
    const firstNameError = nameValidation(
      inputField.firstName,
      "First name is required"
    );
    const lastNameError = nameValidation(
      inputField.lastName,
      "Last name is required"
    );
    const emailError = emailValidation(inputField.email);
    const messageError = nameValidation(
      inputField.message,
      "Message is required"
    );
    const queryError = nameValidation(
      inputField.queryType,
      "Please select a query type"
    );
    const consentError = nameValidation(
      inputField.consentBtn,
      "To submit this form, please consent to being to contacted"
    );
    setError({
      ...error,
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
      message: messageError,
      queryType: queryError,
      consentBtn: consentError,
    });
    console.log(inputField);

    if (!error && inputField) {
      alert("<p>Hello</p>");
    }

    // set the input value after submit the form
    setInputField({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      queryType: "",
      consentBtn: false,
    });
    e.preventDefault();
  };

  return (
    <main className="main_contact">
      <div className="container">
        <div className="form_wrapper">
          <div className="heading">
            <h1>Contact Us</h1>
          </div>
          <div className="contact_form">
            <form action="">
              <div className="name_wrapper">
                <div>
                  <p className="label_name">
                    Fist Name <sup className="required_sign">*</sup>
                  </p>
                  <InputField
                    type="text"
                    name="firstName"
                    value={inputField.firstName}
                    onChange={handleInputField}
                    className="input_field"
                  />
                  {error.firstName ? (
                    <p className="error_message">{error.firstName}</p>
                  ) : null}
                </div>
                <div>
                  <p className="label_name">
                    Last Name <sup className="required_sign">*</sup>
                  </p>
                  <InputField
                    type="text"
                    name="lastName"
                    value={inputField.lastName}
                    onChange={handleInputField}
                    className="input_field"
                  />
                  {error.lastName ? (
                    <p className="error_message">{error.lastName}</p>
                  ) : null}
                </div>
              </div>
              <div className="email_wrapper">
                <p className="label_name">
                  Email <sup className="required_sign">*</sup>
                </p>
                <InputField
                  type="text"
                  name="email"
                  value={inputField.email}
                  onChange={handleInputField}
                  className="input_field"
                />
                {error.email ? (
                  <p className="error_message">{error.email}</p>
                ) : null}
              </div>
              <div className="query_container">
                <p className="label_name">
                  Query Type <sup className="required_sign">*</sup>
                </p>
                <div className="radio_wrapper">
                  <div className="radio_label">
                    <InputField
                      type="radio"
                      name="queryType"
                      value="general"
                      onChange={handleInputField}
                      className="radio_input"
                      checked={inputField.queryType === "general"}
                    />
                    <p>General Enquiry</p>
                  </div>
                  <div className="radio_label">
                    <InputField
                      type="radio"
                      name="queryType"
                      value="support"
                      onChange={handleInputField}
                      className="radio_input"
                      checked={inputField.queryType === "support"}
                    />
                    <p>Support Request</p>
                  </div>
                </div>
                {error.queryType ? (
                  <p className="error_message">{error.queryType}</p>
                ) : null}
              </div>
              <div className="message_wrapper">
                <p className="label_name">
                  Message <sup className="required_sign">*</sup>
                </p>
                <InputField
                  type="text"
                  name="message"
                  value={inputField.message}
                  onChange={handleInputField}
                  className="input_field"
                />
                {error.message ? (
                  <p className="error_message">{error.message}</p>
                ) : null}
              </div>
              <div className="consent_container">
                <div className="consent_wrapper">
                  <InputField
                    type="checkbox"
                    name="consentBtn"
                    value={inputField.consentBtn}
                    onChange={handleInputField}
                    checked={inputField.consentBtn}
                    className="checkbox_field"
                  />
                  <label htmlFor="">
                    I consent to being contacted by the team
                    <sup className="required_sign">*</sup>
                  </label>
                </div>
                {error.consentBtn ? (
                  <div className="submit_error">
                    <p className="error_message">
                      To submit this form, please consent to being to contacted
                    </p>
                  </div>
                ) : null}
              </div>
              <div className="btn_wrapper">
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
