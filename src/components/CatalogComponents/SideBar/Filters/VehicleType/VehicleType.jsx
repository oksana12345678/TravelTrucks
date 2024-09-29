import Icon from "../../../../common/IconComponent/IconComponent";
import {
  DescListItem,
  MainVehicleContainer,
  OptionListContainer,
  VehicleTitle,
} from "./VehicleType.styled.js";

const VEHICLE_TYPE_FILTER_BUTTONS = [
  {
    label: "van",
    icon: "van",

    type: "string",
    fieldName: "form",
    value: "panelTruck",
  },
  {
    label: "fully Integrated",
    icon: "fullyIntegrated",

    type: "string",
    fieldName: "form",
    value: "fullyIntegrated",
  },
  {
    label: "alcove",
    icon: "alcove",

    type: "string",
    fieldName: "form",
    value: "alcove",
  },
];

const VehicleType = ({
  isFilterSelected,
  backendFilters,
  setBackendFilters,
}) => {
  const isSameFieldSelected = (equipment) =>
    backendFilters?.some((filter) => filter.fieldName === equipment.fieldName);

  const handleFilterSelect = (equipment) => {
    // If the filter is selected and belongs to the same field, remove it
    if (isFilterSelected(equipment) && isSameFieldSelected(equipment)) {
      setBackendFilters(
        backendFilters.filter((item) => item.fieldName !== equipment.fieldName)
      );
      // If the filter belongs to the same field, update it
    } else if (isSameFieldSelected(equipment)) {
      setBackendFilters(
        backendFilters.map((fieldParam) => {
          // Replace the filter if it belongs to the "form" field
          if (
            isSameFieldSelected(fieldParam) &&
            fieldParam.fieldName === "form"
          ) {
            return equipment;
          }
          return fieldParam;
        })
      );
      // Otherwise, add the new filter
    } else {
      setBackendFilters([...backendFilters, equipment]);
    }
  };

  return (
    <MainVehicleContainer>
      <VehicleTitle>Vehicle type</VehicleTitle>
      <OptionListContainer>
        <OptionListContainer>
          {VEHICLE_TYPE_FILTER_BUTTONS.map((equipment) => (
            <li key={equipment.label}>
              <DescListItem
                type="button"
                onClick={() => handleFilterSelect(equipment)}
                $isSelected={isFilterSelected(equipment)}
              >
                <Icon id={`icon-${equipment.icon}`} width={32} height={32} />
                {equipment.label}
              </DescListItem>
            </li>
          ))}
        </OptionListContainer>
      </OptionListContainer>
    </MainVehicleContainer>
  );
};

export default VehicleType;
