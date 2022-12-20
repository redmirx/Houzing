import React, { useState } from "react";
import { Content } from "./style";
import Input from "./../Generics/Input";
import Button from "./../Generics/Button";
import { useRequest } from "./../../hooks/useRequest";
import { success, warning } from "./../../hooks/useMessage.jsx";

const SignUp = () => {
  const request = useRequest();
  const [body, setBody] = useState({});

  const onChange = ({ target: { name, value } }) => {
    setBody({ ...body, [name]: value });
  };

  const onSubmit = () => {
    request({
      me: true,
      url: "/public/auth/register",
      method: "POST",
      body,
    }).then((res) => {
      if (
        res["Email.regUserDto.email"] !== "must be a well-formed email address"
      ) {
        success("Registration Successfull. Please check your email!");
        window.location.reload();
      } else {
        warning("Something went wrong");
      }
    });
  };

  return (
    <Content>
      <Content.Title>Sign up</Content.Title>
      <div>
        <Content.SubTitle>Email</Content.SubTitle>
        <Input
          onChange={onChange}
          placeholder="Email"
          name="email"
          type="email"
        />
      </div>
      <div>
        <Content.SubTitle>First name</Content.SubTitle>
        <Input
          onChange={onChange}
          placeholder="First name"
          name="firstname"
          type="text"
        />
      </div>
      <div>
        <Content.SubTitle>Last name</Content.SubTitle>
        <Input
          onChange={onChange}
          placeholder="Last name"
          name="lastname"
          type="text"
        />
      </div>
      <div>
        <Content.SubTitle>Password</Content.SubTitle>
        <Input
          onChange={onChange}
          placeholder="Password"
          name="password"
          type="password"
        />
      </div>
      <Button onClick={onSubmit} width="%">
        Login
      </Button>
    </Content>
  );
};

export default SignUp;
