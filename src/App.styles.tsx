import styled, { css } from "styled-components";

export const AppStyled = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  color: white;
  text-align: center;

  ${(props) =>
    props.showResults &&
    css`
      justify-content: center;
    `};
`;
