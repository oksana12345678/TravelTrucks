import { useState } from "react";
import { LocationInput, LocationLabel, MapIcon } from "./Location.styled";

const Location = ({
  setBackendFilters,
  backendFilters,
  resetLocationInput,
}) => {
  const [location, setLocation] = useState(""); // State to track input value

  const handleFilterSelect = (e) => {
    const queryFilter = e.target.value.trim();
    setLocation(queryFilter); // Update input value state

    // Update backendFilters with the location
    if (queryFilter) {
      setBackendFilters([
        ...backendFilters,
        { fieldName: "location", value: queryFilter },
      ]);
    }
  };

  // Reset the location input field

  return (
    <LocationLabel>
      Location
      <LocationInput
        placeholder="City"
        value={location} // Control the input value
        onChange={handleFilterSelect}
      />
      <MapIcon />
    </LocationLabel>
  );
};

export default Location;
