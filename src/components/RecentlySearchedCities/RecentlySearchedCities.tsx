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
  addressHistory,
  setAddressHistory,
  setAddress,
}) => {
  const dispatch = useDispatch();

  const handleOnClickHistory = (address): void => {
    setAddress(address);
    dispatch(getWeather(address));
  };

  const handleRemoveFromHistory = (addressIndex): void => {
    let newCities = [...addressHistory];

    newCities.splice(addressIndex, 1);

    setAddressHistory(newCities);

    localStorage.setItem("addressHistory", JSON.stringify(newCities));
  };

  return (
    <ContainerRecentSearched>
      <RecentlySearchedTitle>Recently searched cities</RecentlySearchedTitle>
      {addressHistory.map((address, index) => (
        <RecentSearched key={index}>
          <div onClick={() => handleOnClickHistory(address)}>{address}</div>
          <RecentSearchedActionsContainer>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => handleRemoveFromHistory(index)}
            />
            <SelectRecentSearchedContainer
              onClick={() => handleOnClickHistory(address)}
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
