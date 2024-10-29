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
              </div>
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
