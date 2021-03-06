import React, { useState } from "react";

import Axios from "axios";

import Input from "../common/Input";
import Button from "../common/Button";
import "./style.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (
      !email.trim() ||
      !name.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      !phone.trim()
    ) {
      alert("error , you have empty value");
    } else if (password !== confirmPassword) {
      alert("confirmed password doesn't match password pleaze try again");
    } else {
      try {
        const { data } = await Axios.post(
          "https://jereer-back.herokuapp.com/api/v1/signup",
          {
            name,
            phone,
            confirmPassword,
            email,
            password,
          }
        );
        setEmail("");
        setName("");
        setPassword("");
        setConfirmPassword("");
        setphone("");
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
            type="text"
            name="name"
            handelChange={({ target: { value } }) => setName(value)}
            placeholder="enter your name"
            value={name}
            className="inputs"
          />
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
          <Input
            type="password"
            name="confirmPassword"
            handelChange={({ target: { value } }) => setConfirmPassword(value)}
            placeholder="enter confirm password"
            value={confirmPassword}
            className="inputs"
          />
          <Input
            type="text"
            name="phone"
            handelChange={({ target: { value } }) => setphone(value)}
            placeholder="enter your phone number"
            value={phone}
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
