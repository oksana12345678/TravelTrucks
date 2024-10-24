import { useState } from "react";
import { LocationInput, LocationLabel, MapIcon } from "./Location.styled";

const Location = ({ setBackendFilters, backendFilters }) => {
  const [location, setLocation] = useState("");

  const handleFilterSelect = (e) => {
    const queryFilter = e.target.value.trim();
    setLocation(queryFilter);

    if (queryFilter) {
      setBackendFilters([
        ...backendFilters,
        { fieldName: "location", value: queryFilter },
      ]);
    }
  };

  return (
    <LocationLabel>
      Location
      <LocationInput
        placeholder="City"
        value={location}
        onChange={handleFilterSelect}
      />
      <MapIcon />
    </LocationLabel>
  );
};

export default Location;
