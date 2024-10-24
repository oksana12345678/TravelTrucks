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
    icon: "paneltruck",

    type: "string",
    fieldName: "form",
    value: "panelTruck",
  },
  {
    label: "fully Integrated",
    icon: "fullyintegrated",

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
    if (isFilterSelected(equipment) && isSameFieldSelected(equipment)) {
      setBackendFilters(
        backendFilters.filter((item) => item.fieldName !== equipment.fieldName)
      );
    } else if (isSameFieldSelected(equipment)) {
      setBackendFilters(
        backendFilters.map((fieldParam) => {
          if (
            isSameFieldSelected(fieldParam) &&
            fieldParam.fieldName === "form"
          ) {
            return equipment;
          }
          return fieldParam;
        })
      );
    } else {
      setBackendFilters([...backendFilters, equipment]);
    }
  };

  return (
    <MainVehicleContainer>
      <VehicleTitle>Vehicle type</VehicleTitle>

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
    </MainVehicleContainer>
  );
};

export default VehicleType;
