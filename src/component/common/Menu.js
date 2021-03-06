import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">home</Link>
        <Link to="/register">register</Link>
        <Link to="/login">login</Link>
      </nav>
    </header>
  );
}
