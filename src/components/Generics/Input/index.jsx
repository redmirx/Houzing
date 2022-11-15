import React, { forwardRef } from "react";
import { Container, Wrapper, Icon } from "./style";

const Input = forwardRef(
  (
    {
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
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
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
  }
);

export default Input;
