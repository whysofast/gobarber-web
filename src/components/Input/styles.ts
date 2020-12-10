import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  /* Já prepara pra quando for colocar a bordar vermelha de erro caso seja inserido dado incorreto */
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }
`;
