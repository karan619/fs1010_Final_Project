import { emailValidate } from "../../util/emailValid";

const userVald = (req, res, next) => {
  let errMsg = {
    message: "validation error",
    invalid: [],
  };

  //condition for username
  if (!req.body.name) {
    errMsg.invalid.push("name");
  } else if (typeof req.body.name != "string") {
    errMsg.invalid.push("name");
  }

  /*if (existingUser(req.body.name)) {
        //console.log('working')
        errMsg.invalid.push('user already exist')
    }*/

  //condition for password

  if (!req.body.password) {
    errMsg.invalid.push("password");
  } else if (req.body.password.length < 8) {
    errMsg.invalid.push("must be a minimum 8 characters");
  }

  if (req.body.confirmPassword != req.body.password) {
    errMsg.invalid.push("password do not match");
  }

  //condtion for email

  if (!emailValidate(req.body.email)) {
    errMsg.invalid.push("email");
  }

  /* if (existingEmail(req.body.email)) {
        //console.log('working')
        errMsg.invalid.push('email already exist')
    }*/

  if (errMsg.invalid.length > 0) {
    return res.status(400).json(errMsg);
  }
  next();
};

export { userVald };
