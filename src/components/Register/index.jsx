import React from "react";
import { Tabs } from "antd";
import SignIn from "./../SignIn";
import SignUp from "./../SignUp";
import { Container } from "./style";

const Register = () => {
  return (
    <Container>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `Sign in`,
            key: "1",
            children: <SignIn />,
          },
          {
            label: `Sign up`,
            key: "2",
            children: <SignUp />,
          },
        ]}
      />
    </Container>
  );
};

export default Register;
