import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function SignUp() {
  return (
    <div className="container" style={{ marginTop: "10rem" }}>
      <div className="row">
        <div className="col-lg-1 col-sm-12"></div>
        <div className="col-lg-6 col-sm-12">
          <img
            src="Media\Images\signup.png"
            alt="signup image"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4 col-sm-12">
          <h2 style={{ marginTop: "2rem" }}>Signup now</h2>
          <h6 style={{ marginTop: "1.5rem" }}>
            Or track your existing application.
          </h6>
          <TextField
            id="outlined-basic"
            label="Moblie number"
            variant="outlined"
            type="text"
            style={{ marginTop: "2rem" }}
            inputmode="numeric"
            pattern="[0-9]*"
          />
          <p style={{ marginTop: "1.5rem" }}>
            You will receive an OTP on your number
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
