import React, { useState } from "react";
import { Container, Content } from "./style";
import Input from "./../Generics/Input";
import Button from "./../Generics/Button";
import { useRequest } from "./../../hooks/useRequest";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { name, value } }) => {
    setBody({ ...body, [name]: value });
  };

  const onSubmit = async () => {
    console.log(body);
    try {
      await request({
        me: true,
        url: "/public/auth/login",
        method: "POST",
        body,
      }).then((res) => {
        if (res?.authenticationToken) {
          navigate("/home");
          localStorage.setItem("token", res?.authenticationToken);
        }
      });
    } catch (err) {}
  };

  return (
    <Container>
      <Content>
        <Content.Title>Sign in</Content.Title>
        <div>
          <Content.SubTitle>Login</Content.SubTitle>
          <Input onChange={onChange} placeholder="Email" name="email" />
        </div>
        <div>
          <Content.SubTitle>Password</Content.SubTitle>
          <Input onChange={onChange} placeholder="Password" name="password" />
        </div>
        <Button onClick={onSubmit} width="%">
          Login
        </Button>
      </Content>
    </Container>
  );
};

export default SignIn;
