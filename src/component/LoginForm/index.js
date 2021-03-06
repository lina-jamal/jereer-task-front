import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Axios from "axios";
import { AuthContext } from "../AuthContex";
import Input from "../common/Input";
import Button from "../common/Button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuth, isAuth } = useContext(AuthContext);
  console.log(isAuth);

  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("error , you have empty value");
    } else {
      try {
        await Axios.post("http://localhost:5000/api/v1/login", {
          email,
          password,
        });
        setEmail("");
        setPassword("");
        setIsAuth(true);
        history.push("/hello");
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
