const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

let error = "";

export const nameValidation = (errorName, erroValue) => {
  if (!errorName) {
    error = `${erroValue}`;
    return error;
  } else {
    error = false;
    return error;
  }
};

export const emailValidation = (userEmail) => {
  if (!userEmail) {
    error = "Email address is required";
    return error;
  } else if (!emailRegex.test(userEmail)) {
    error = "Please enter a valid email address";
    return error;
  } else {
    error = false;
    return error;
  }
};
