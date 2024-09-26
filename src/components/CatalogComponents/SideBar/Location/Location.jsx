import { LocationInput, LocationLabel, MapIcon } from "./Location.styled";

const Location = () => {
  return (
    <LocationLabel>
      Location
      <LocationInput placeholder="City" />
      <MapIcon />
    </LocationLabel>
  );
};
export default Location;
