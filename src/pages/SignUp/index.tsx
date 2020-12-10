import React from 'react';
import {
  FiLogIn,
  FiMail,
  FiLock,
  FiPackage,
  FiUser,
  FiArrowLeft,
} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';

import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Sign Up</h1>

        <Input icon={FiUser} name="name" placeholder="Name" />
        <Input icon={FiMail} name="email" placeholder="E-mail" />

        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Password"
        />

        <Button type="submit">Register</Button>
      </form>
      <a href="signup">
        <FiArrowLeft />
        Back to Sign In
      </a>
    </Content>
  </Container>
);

export default SignIn;
