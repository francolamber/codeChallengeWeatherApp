export interface RecentlySearchedCitiesProps {
  cityHistory: string[];
  setCity: (arg: string) => void;
  setCityHistory: (arg: string[]) => void;
}
