import {
  DescListItem,
  EquipmentTitle,
  MainEquipmentContainer,
  OptionListContainer,
} from "./VehicleEquipment.styled";
import Icon from "../../../../common/IconComponent/IconComponent";

const VehicleEquipment = ({ selectedFilters, handleFilter }) => {
  const handleCheckboxChange = (equipment) => {
    if (selectedFilters.includes(equipment)) {
      handleFilter(selectedFilters.filter((item) => item !== equipment));
    } else {
      handleFilter([...selectedFilters, equipment]);
    }
  };

  return (
    <MainEquipmentContainer>
      <EquipmentTitle>Vehicle equipment</EquipmentTitle>
      <ul>
        <OptionListContainer>
          {["AC", "TV", "Bathroom", "Kitchen", "Radio", "Automatic"].map(
            (equipment) => (
              <li key={equipment}>
                <DescListItem>
                  <input
                    type="checkbox"
                    id={`equipment-${equipment}`}
                    checked={selectedFilters.includes(equipment)}
                    onChange={() => handleCheckboxChange(equipment)}
                  />
                  <label htmlFor={`equipment-${equipment}`}>
                    <Icon
                      id={`icon-${equipment.toLowerCase()}`}
                      width={32}
                      height={32}
                    />
                    {equipment}
                  </label>
                </DescListItem>
              </li>
            )
          )}
        </OptionListContainer>
      </ul>
    </MainEquipmentContainer>
  );
};

export default VehicleEquipment;
