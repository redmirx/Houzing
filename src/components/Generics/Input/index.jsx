import React from "react";
import { Container } from "./style";

const Input = ({
  type,
  height,
  width,
  fontSize,
  onChange,
  placeholder,
  name,
  value,
  defaultValue,
}) => {
  return (
    <Container
      type={type}
      height={height}
      width={width}
      fontSize={fontSize}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      value={value}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
