import styled from "styled-components";
import * as React from "react";

const Header = styled.div`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #445064;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const HeaderComponent: React.FC = () => (
  <Header>
    <div>Weather App</div>
  </Header>
);

export default HeaderComponent;
