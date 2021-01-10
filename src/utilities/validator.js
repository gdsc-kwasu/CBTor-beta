/** @format */

const validator = (Validator, email, password, alert, name) => {
  let output;
  if (name && name.length === 1) {
    alert.error("Enter your fullname");
    output = false;
  } else if (name && name.length < 8) {
    alert.error("fullname must be greater than 8 characters");
    output = false;
  } else if (email.length < 1) {
    alert.error("Enter your email address");
    output = false;
  } else if (!Validator.validate(email)) {
    alert.error("Input a valid email address");
    output = false;
  } else if (password.length < 8) {
    alert.error("password must not be lesser than 8 characters");
    output = false;
  } else {
    output = true;
  }
  return output;
};

export default validator;
