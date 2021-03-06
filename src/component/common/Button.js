import React from "react";

export default function Button({
  handelClick,
  name,
  children,
  type,
  ...reset
}) {
  return (
    <button onClick={handelClick} name={name} type={type} {...reset}>
      {children}
    </button>
  );
}
