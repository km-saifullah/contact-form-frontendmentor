import React, { useState } from "react";
import InputField from "./components/InputField";
import "./app.scss";

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
    // <main className="contact_form">
    //   <div className="container">
    //     <div className="form_wrapper">
    //       <div className="heading">
    //         <h1>Contact Us</h1>
    //       </div>
    //       <div className="form_container">
    //         <form className="contact_container" action="">
    //           <div className="name_container">
    //             <div className="input_container">
    //               <p className="form_label">
    //                 First Name <sup>*</sup>
    //               </p>
    //               <InputField
    //                 type="text"
    //                 name="firstName"
    //                 value={inputField.firstName}
    //                 onChange={handleInputField}
    //                 className="input_field"
    //               />
    //             </div>
    //             <div className="input_container">
    //               <p className="form_label">
    //                 Last Name <sup>*</sup>
    //               </p>
    //               <InputField
    //                 type="text"
    //                 name="lastName"
    //                 value={inputField.lastName}
    //                 onChange={handleInputField}
    //                 className="input_field"
    //               />
    //             </div>
    //           </div>
    //           <div className="input_container">
    //             <p className="form_label">
    //               Email Address <sup>*</sup>
    //             </p>
    //             <InputField
    //               type="email"
    //               name="email"
    //               value={inputField.email}
    //               onChange={handleInputField}
    //               className="input_field email-field"
    //             />
    //           </div>
    //           <div className="input_container">
    //             <p className="form_label">
    //               Query Type <sup>*</sup>
    //             </p>
    //             <div className="radio_container">
    //               <div>
    //                 <InputField
    //                   type="radio"
    //                   name="queryType"
    //                   value={inputField.queryType}
    //                   onChange={handleInputField}
    //                   className="radio_btn"
    //                 />
    //                 <div>
    //                   <label className="form_label" htmlFor="">
    //                     General Enquiry
    //                   </label>
    //                 </div>
    //               </div>
    //               <div>
    //                 <InputField
    //                   type="radio"
    //                   name="queryType"
    //                   value={inputField.queryType}
    //                   onChange={handleInputField}
    //                   className="radio_btn"
    //                 />
    //                 <div>
    //                   <label className="form_label" htmlFor="">
    //                     Support Request
    //                   </label>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="input_container">
    //             <p className="form_label">
    //               Message <sup>*</sup>
    //             </p>
    //             <InputField
    //               type="text"
    //               name="message"
    //               value={inputField.message}
    //               onChange={handleInputField}
    //               className="input_field message_field"
    //             />
    //           </div>
    //           <div>
    //             <input type="checkbox" />
    //             <label className="form_label" htmlFor="">
    //               I consent to being contacted by the team <sup>*</sup>
    //             </label>
    //           </div>
    //           <div>
    //             <button onClick={handleSubmit}>Submit</button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </main>
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
                      name="email"
                      value={inputField.email}
                      onChange={handleInputField}
                      className="radio_input"
                    />
                    <p>General Enquiry</p>
                  </div>
                  <div className="radio_label">
                    <InputField
                      type="radio"
                      name="email"
                      value={inputField.email}
                      onChange={handleInputField}
                      className="radio_input"
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
                  name="message"
                  value={inputField.message}
                  onChange={handleInputField}
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
