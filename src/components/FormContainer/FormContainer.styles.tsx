import styled from "styled-components";

export const Title = styled.h1`
  font-size: 40px;
`;

export const ContainerApp = styled.div`
  width: 530px;
`;

export const SpinLoader = styled.div`
  border: 5px solid #272c34;
  border-radius: 50%;
  border-top: 5px solid #445064;
  border-left: 5px solid #445064;
  border-right: 5px solid #445064;
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: 10px;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinLoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff3939;
`;
