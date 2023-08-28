import React from "react";
import "./Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Register = () => {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const regex  = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$"

  const navigate = useNavigate();
  let local = localStorage.getItem("registerData");
  let data = JSON.parse(local);
  const handleSubmit = () => {
    localStorage.setItem("registerData", JSON.stringify(register));
    setRegister("");
    if (data.email === register.email) {
      alert("this email is already registerd");
    }
    if (
      !register.firstName ||
      !register.lastName ||
      !register.email ||
      !register.password ||
      !register.confirmPassword
    ) {
      alert("Please fill in all the required fields.");
      return;
    }
    navigate("/login");
   
  };


  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              value={register.firstName}
              onChange={(e) => {
                setRegister((prev) => {
                  return { ...prev, firstName: e.target.value };
                });
              }}
            />
            <span>Firstname</span>
          </label>
          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              value={register.lastName}
              onChange={(e) => {
                setRegister((prev) => {
                  return { ...prev, lastName: e.target.value };
                });
              }}
            />
            <span>Lastname</span>
          </label>
        </div>
        <label>
          <input
            required
            placeholder=""
            type="email"
            className="input"
            value={register.email}
            onChange={(e) => {
              setRegister((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
          />
          <span>Email</span>
        </label>
        <label>
          <input
            required
            placeholder=""
            type="password"
            className="input"
            value={register.password}
            onChange={(e) => {
              setRegister((prev) => {
                return { ...prev, password: e.target.value };
              });
            }}
          />
          <span>Password</span>
        </label>
        <label>
          <input
            required
            placeholder=""
            type="password"
            className="input"
            value={register.confirmPassword}
            onChange={(e) => {
              setRegister((prev) => {
                return { ...prev, confirmPassword: e.target.value };
              });
            }}
          />
          <span>Confirm password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an acount ? <Link to={"/login"}>Signin</Link>{" "}
        </p>
      </form>
    </>
  );
};

export default Register;
