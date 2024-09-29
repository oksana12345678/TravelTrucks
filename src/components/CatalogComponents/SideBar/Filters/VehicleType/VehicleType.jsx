import Icon from "../../../../common/IconComponent/IconComponent";
import {
  DescListItem,
  MainVehicleContainer,
  OptionListContainer,
  VehicleTitle,
} from "./VehicleType.styled.js";

const VehicleType = ({ selectedFilters, handleFilter }) => {
  return (
    <MainVehicleContainer>
      <VehicleTitle>Vehicle type</VehicleTitle>
      <OptionListContainer>
        <li>
          <DescListItem
            type="button"
            onClick={() => handleFilter("panelTruck")}
            $isSelected={selectedFilters.includes("panelTruck")}
          >
            <Icon id="icon-bi_grid-1x2" width={32} height={32} />
            Van
          </DescListItem>
        </li>
        <li>
          <DescListItem
            type="button"
            onClick={() => handleFilter("fullyIntegrated")}
            $isSelected={selectedFilters.includes("fullyIntegrated")}
          >
            <Icon id="icon-bi_grid" width={32} height={32} />
            Fully Integrated
          </DescListItem>
        </li>
        <li>
          <DescListItem
            type="button"
            onClick={() => handleFilter("Alcove")}
            $isSelected={selectedFilters.includes("Alcove")}
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
