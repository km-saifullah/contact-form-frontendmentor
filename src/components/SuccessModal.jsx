import React from "react";
import { SiTicktick } from "react-icons/si";
import "./successModal.scss";

const SuccessModal = () => {
  return (
    <div className="success_wrapper" >
      <div className="success_heading">
        <div className="icon_container">
          <SiTicktick />
        </div>
        <div>
          <h3>Message Sent!</h3>
        </div>
      </div>
      <p>Thanks for cimpleting the form. We'll be in touch soon!</p>
    </div>
  );
};

export default SuccessModal;
