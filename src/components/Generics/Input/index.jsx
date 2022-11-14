import React from "react";
import { Container, Wrapper, Icon } from "./style";

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
  icon,
}) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
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
        icon={icon}
      />
    </Wrapper>
  );
};

export default Input;
