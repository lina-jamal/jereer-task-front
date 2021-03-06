import React, { useState } from "react";

import Axios from "axios";

import Input from "../common/Input";
import Button from "../common/Button";
// import "./style.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("error , you have empty value");
    } else {
      try {
        await Axios.post("https://jereer-back.herokuapp.com/api/v1/login", {
          email,
          password,
        });
        setEmail("");
        setPassword("");
      } catch (err) {
        setErrorMessage(err);
      }
    }
  };

  return (
    <>
      {!errorMessage && (
        <form className="signUp_Form" onSubmit={handelSubmit}>
          <Input
            type="email"
            name="email"
            handelChange={({ target: { value } }) => setEmail(value)}
            placeholder="enter your email"
            value={email}
            className="inputs"
          />
          <Input
            type="password"
            name="password"
            handelChange={({ target: { value } }) => setPassword(value)}
            placeholder="enter your password"
            value={password}
            className="inputs"
          />

          <Button name="submit" className="button">
            submit{" "}
          </Button>
        </form>
      )}
    </>
  );
}
