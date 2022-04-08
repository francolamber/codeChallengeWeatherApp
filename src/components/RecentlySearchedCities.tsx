import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getWeather } from "../reduxStore/weather/actions/getWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";

const ContainerRecentSearched = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const RecentlySearchedTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
`;

const RecentSearched = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const SelectRecentSearchedContainer = styled.div`
  margin-left: 10px;
`;

const RecentSearchedActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface Props {
  cityHistory: string[];
  setCity: (arg: string) => void;
  setCityHistory: (arg: string[]) => void;
}

const RecentlySearchedCities: React.FC<Props> = ({
  cityHistory,
  setCityHistory,
  setCity,
}) => {
  const dispatch = useDispatch();

  const handleOnClickHistory = (city): void => {
    setCity(city);
    dispatch(getWeather(city));
  };

  const handleRemoveFromHistory = (cityIndex): void => {
    let newCities = [...cityHistory];

    newCities.splice(cityIndex, 1);

    setCityHistory(newCities);

    localStorage.setItem("cityHistory", JSON.stringify(newCities));
  };

  return (
    <ContainerRecentSearched>
      <RecentlySearchedTitle>Recently searched cities</RecentlySearchedTitle>
      {cityHistory.map((city, index) => (
        <RecentSearched key={index}>
          <div onClick={() => handleOnClickHistory(city)}>{city}</div>
          <RecentSearchedActionsContainer>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => handleRemoveFromHistory(index)}
            />
            <SelectRecentSearchedContainer
              onClick={() => handleOnClickHistory(city)}
            >
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </SelectRecentSearchedContainer>
          </RecentSearchedActionsContainer>
        </RecentSearched>
      ))}
    </ContainerRecentSearched>
  );
};

export default RecentlySearchedCities;
