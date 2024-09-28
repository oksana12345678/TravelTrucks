import Icon from "../../../../common/IconComponent/IconComponent";
import {
  DescListItem,
  MainVehicleContainer,
  OptionListContainer,
  VehicleTitle,
} from "./VehicleType.styled.js";

const VehicleType = ({ selectedFilter, handleFilter }) => {

  const handleButtonClick = (filter) => {
    handleFilter(filter);
  };

  return (
    <MainVehicleContainer>
      <VehicleTitle>Vehicle type</VehicleTitle>
      <OptionListContainer>
        <li>
          <DescListItem
            type="button"
            onClick={() => handleButtonClick("panelTruck")}
            $isSelected={selectedFilter === "panelTruck"}
          >
            <Icon id="icon-bi_grid-1x2" width={32} height={32} />
            Van
          </DescListItem>
        </li>
        <li>
          <DescListItem
            type="button"
            onClick={() => handleButtonClick("fullyIntegrated")}
            $isSelected={selectedFilter === "fullyIntegrated"}
          >
            <Icon id="icon-bi_grid" width={32} height={32} />
            Fully Integrated
          </DescListItem>
        </li>
        <li>
          <DescListItem
            type="button"
            onClick={() => handleButtonClick("Alcove")}
            $isSelected={selectedFilter === "Alcove"}
          >
            <Icon id="icon-bi_grid-3x3-gap" width={32} height={32} />
            Alcove
          </DescListItem>
        </li>
      </OptionListContainer>
    </MainVehicleContainer>
  );
};

export default VehicleType;
