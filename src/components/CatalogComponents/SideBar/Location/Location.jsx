import { useDispatch, useSelector } from "react-redux";
import { LocationInput, LocationLabel, MapIcon } from "./Location.styled";
import { selectLocation } from "../../../../redux/filter/selectors";
import { setLocation } from "../../../../redux/filter/slice";

const Location = () => {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(selectLocation);

  const handleFilter = (e) => {
    const query = e.target.value.trim();
    dispatch(setLocation(query));
  };

  return (
    <LocationLabel>
      Location
      <LocationInput
        placeholder="City"
        value={selectedLocation}
        onChange={handleFilter}
      />
      <MapIcon />
    </LocationLabel>
  );
};
export default Location;
