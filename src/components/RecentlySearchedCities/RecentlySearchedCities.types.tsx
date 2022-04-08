export interface RecentlySearchedCitiesProps {
  addressHistory: string[];
  setAddress: (arg: string) => void;
  setAddressHistory: (arg: string[]) => void;
}
