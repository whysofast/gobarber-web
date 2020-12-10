import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';

import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Login</h1>

        <Input icon={FiMail} name="email" placeholder="E-mail" />

        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Password"
        />

        <Button type="submit">Enter</Button>

        <a href="forgot">Forgot password</a>
      </form>
      <a href="signup">
        <FiLogIn />
        Create an account.
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
