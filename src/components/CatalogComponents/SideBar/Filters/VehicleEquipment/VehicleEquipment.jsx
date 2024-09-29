import {
  DescListItem,
  EquipmentTitle,
  MainEquipmentContainer,
  OptionListContainer,
} from "./VehicleEquipment.styled";
import Icon from "../../../../common/IconComponent/IconComponent";

const VehicleEquipment = ({
  selectedFilters,
  handleFilter,
  selectedAutomaticFilters,
  handleAutomaticFilter,
}) => {
  const handleButtonClick = (equipment) => {
    if (selectedFilters.includes(equipment)) {
      handleFilter(selectedFilters.filter((item) => item !== equipment));
    } else {
      handleFilter([...selectedFilters, equipment]);
    }
  };

  const handleAutomaticButtonFilter = (equipment) => {
    handleAutomaticFilter((prevFilters) =>
      prevFilters.includes(equipment)
        ? prevFilters.filter((item) => item !== equipment)
        : [...prevFilters, equipment]
    );
  };

  return (
    <MainEquipmentContainer>
      <EquipmentTitle>Vehicle equipment</EquipmentTitle>
      <ul>
        <OptionListContainer>
          {["AC", "TV", "Bathroom", "Kitchen", "Radio"].map((equipment) => (
            <li key={equipment}>
              <DescListItem
                type="button"
                onClick={() => handleButtonClick(equipment)}
                $isSelected={selectedFilters.includes(equipment)}
              >
                <Icon
                  id={`icon-${equipment.toLowerCase()}`}
                  width={32}
                  height={32}
                />
                {equipment}
              </DescListItem>
            </li>
          ))}
          <li>
            <DescListItem
              type="button"
              onClick={() => handleAutomaticButtonFilter("Automatic")}
              $isSelected={selectedAutomaticFilters.includes("Automatic")}
            >
              <Icon id="icon-automatic" width={32} height={32} />
              Automatic
            </DescListItem>
          </li>
        </OptionListContainer>
      </ul>
    </MainEquipmentContainer>
  );
};

export default VehicleEquipment;
