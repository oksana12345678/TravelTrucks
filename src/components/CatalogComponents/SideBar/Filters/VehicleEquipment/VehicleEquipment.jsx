import {
  DescListItem,
  EquipmentTitle,
  MainEquipmentContainer,
  OptionListContainer,
} from "./VehicleEquipment.styled";
import Icon from "../../../../common/IconComponent/IconComponent";

const VEHICLE_EQUIPMENT_FILTER_BUTTONS = [
  {
    label: "AC",
    icon: "ac",
    type: "boolean",
    fieldName: "AC",
    value: true,
  },
  {
    label: "TV",
    icon: "tv",
    type: "boolean",
    fieldName: "TV",
    value: true,
  },
  {
    label: "bathroom",
    icon: "bathroom",
    type: "boolean",
    fieldName: "bathroom",
    value: true,
  },
  {
    label: "kitchen",
    icon: "kitchen",
    type: "boolean",
    fieldName: "kitchen",
    value: true,
  },
  {
    label: "radio",
    icon: "radio",
    type: "boolean",
    fieldName: "radio",
    value: true,
  },
  {
    label: "automatic",
    icon: "automatic",
    type: "string",
    fieldName: "transmission",
    value: "automatic",
  },
];

const VehicleEquipment = ({
  isFilterSelected,
  backendFilters,
  setBackendFilters,
}) => {
  const handleFilterSelect = (equipment) => {
    if (isFilterSelected(equipment)) {
      setBackendFilters(
        backendFilters.filter((item) => item.fieldName !== equipment.fieldName)
      );
    } else {
      setBackendFilters([...backendFilters, equipment]);
    }
  };

  return (
    <MainEquipmentContainer>
      <EquipmentTitle>Vehicle equipment</EquipmentTitle>
      <ul>
        <OptionListContainer>
          {VEHICLE_EQUIPMENT_FILTER_BUTTONS.map((equipment) => (
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
      </ul>
    </MainEquipmentContainer>
  );
};

export default VehicleEquipment;
