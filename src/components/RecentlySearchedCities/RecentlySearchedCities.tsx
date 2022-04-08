import { useDispatch } from "react-redux";
import { getWeather } from "../../reduxStore/weather/actions/getWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { RecentlySearchedCitiesProps } from "./RecentlySearchedCities.types";
import {
  ContainerRecentSearched,
  RecentlySearchedTitle,
  RecentSearched,
  RecentSearchedActionsContainer,
  SelectRecentSearchedContainer,
} from "./RecentlySearchedCities.styles";

const RecentlySearchedCities: React.FC<RecentlySearchedCitiesProps> = ({
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
