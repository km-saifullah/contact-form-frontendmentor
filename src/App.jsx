import React, { useState } from "react";
import InputField from "./components/InputField";
import "./app.scss";

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
    e.preventDefault();
    console.log(inputField);
    setInputField({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      queryType: "",
      consentBtn: false,
    });
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
                  <p className="error_message">First name is required</p>
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
                  <p className="error_message">Last name is required</p>
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
                <p className="error_message">
                  Please enter a valid email address
                </p>
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
                <p className="error_message">Please select a query type</p>
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
                <p className="error_message">Message is required</p>
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
                <div className="submit_error">
                  <p className="error_message">
                    To submit this form, please consent to being to contacted
                  </p>
                </div>
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
