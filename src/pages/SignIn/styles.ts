import styled from 'styled-components';
import { shade } from 'polished';

import singInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  /* Ocupa toda a tela do usuário */
  height: 100vh;
  display: flex;
  /* Faz com que os elementos dentro do container tenham o tamanho total da página, sem deixar nada em "branco" */
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.25, '#f4ede8')};
      }
    }
  }

  /* o '>' faz com que apenas os <a> do lado de fora seja atigindo */
  /* Caso contrário, o configurado acima também seria afetado. */
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.25, '#ff9000')};
    }
  }
`;
export const Background = styled.div`
  /* Faz ocupar todo o espaço, a partid dos 700 px */
  flex: 1;
  background: url(${singInBackgroundImg}) no-repeat center;
  /* Independente do tamanho da imagem, garante que ela sempre irá cobrir a totalida do espaço */
  background-size: cover;
`;
