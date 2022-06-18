import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const createUser = (e) => {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <div>
      <form onSubmit={createUser}>
        <div className="info">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        {firstName.length > 0 && firstName.length < 2 ?(
            <p>First Name must be at least 2 characters</p>
        ) : null}
        <div className="info">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
          {lastName.length > 0 && lastName.length < 2 ?(
            <p>Last Name must be at least 2 characters</p>
        ) : null}
        <div className="info">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
          {email.length > 0 && email.length < 5 ?(
            <p>Email must be at least 5 characters</p>
        ) : null}
        <div className="info">
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {password.length > 0 && password.length < 8 ?(
            <p>Password must be at least 8 characters</p>
        ) : null}
        {password !== confirmPassword ?(
            <p>Password must match</p>
        ) : null}
        <div className="info">
          <label>Confirm Password</label>
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </form>
      <div className="data">
          <p className="title">Your Form Data</p>
          <p>First Name {firstName}</p>
          <p>Last Name {lastName}</p>
          <p>Email {email}</p>
          <p>Password {password}</p>
          <p>Confirm Password {confirmPassword}</p>
      </div>
    </div>
  );
};

export default Form;
