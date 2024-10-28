import React, { useState } from "react";
import InputField from "./components/InputField";

const App = () => {
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consentBtn: false,
  });

  // handle input fields
  const handleInputField = (e) => {
    const inputFieldInfo = { ...inputField };
    inputFieldInfo[e.target.name] = e.target.value;
    setInputField(inputFieldInfo);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputField);
  };

  return (
    <main className="">
      <div className="container">
        <div>
          <h1>Contact Us</h1>
        </div>
        <div>
          <form action="">
            <div>
              <div>
                <p>
                  First Name <sup>*</sup>
                </p>
                <InputField
                  type="text"
                  name="firstName"
                  value={inputField.firstName}
                  onChange={handleInputField}
                />
              </div>
              <div>
                <p>
                  Last Name <sup>*</sup>
                </p>
                <InputField
                  type="text"
                  name="lastName"
                  value={inputField.lastName}
                  onChange={handleInputField}
                />
              </div>
            </div>
            <div>
              <p>
                Email Address <sup>*</sup>
              </p>
              <InputField
                type="email"
                name="email"
                value={inputField.email}
                onChange={handleInputField}
              />
            </div>
            <div>
              <p>
                Query Type <sup>*</sup>
              </p>
              <div>
                <InputField
                  type="radio"
                  name="radio"
                  value={inputField.queryType}
                  onChange={handleInputField}
                />
                <label htmlFor="">General Enquiry</label>
              </div>
              <div>
                <InputField
                  type="radio"
                  name="radio"
                  value={inputField.queryType}
                  onChange={handleInputField}
                />
                <label htmlFor="">Support Request</label>
              </div>
            </div>
            <div>
              <p>
                Message <sup>*</sup>
              </p>
              <InputField
                type="text"
                name="message"
                value={inputField.message}
                onChange={handleInputField}
              />
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">
                I consent to being contacted by the team <sup>*</sup>
              </label>
            </div>
            <div>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default App;
