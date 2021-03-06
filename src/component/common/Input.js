import React from "react";

export default function Input({
  handelChange,
  name,
  placeholder,
  type,
  value,
  ...reset
}) {
  return (
    <input
      onChange={handelChange}
      placeholder={placeholder}
      value={value}
      type={type}
      name={name}
      {...reset}
    />
  );
}
