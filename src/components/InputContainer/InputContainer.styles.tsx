import styled from "styled-components";

export const InputAddress = styled.input`
  background: transparent;
  width: 90%;
  padding: 5px;
  font-size: 18px;
  margin: 8px 0;
  color: white;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid white;

  &:focus-visible {
    outline: none;
    }
  }
`;

export const ButtonSubmit = styled.button`
  background-color: #445064;
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 58%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
`;

export const ContainerForm = styled.div`
  width: 530px;
  display: flex;
  justify-content: space-between;
`;

export const FromRevomeIcon = styled.div`
  left: -20px;
  position: relative;
  top: 10px;
`;
