import React from "react";
import { FiLogIn, FiMail, FiLock, FiPackage, FiUser, FiArrowLeft } from "react-icons/fi";

import { Form } from "@unform/web";

import logoImg from "../../assets/logo.svg";

import Input from "../../components/Input";

import Button from "../../components/Button";

import { Container, Content, Background } from "./styles";

const SignUp: React.FC = () => {
  function HandleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form initialData={{ name: "Fastin" }} onSubmit={HandleSubmit}>
          <h1>Sign Up</h1>

          <Input icon={FiUser} name="name" placeholder="Name" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />

          <Input icon={FiLock} name="password" type="password" placeholder="Password" />

          <Button type="submit">Register</Button>
        </Form>
        <a href="signup">
          <FiArrowLeft />
          Back to Sign In
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
