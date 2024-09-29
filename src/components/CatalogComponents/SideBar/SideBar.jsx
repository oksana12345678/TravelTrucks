import VehicleEquipment from "./Filters/VehicleEquipment/VehicleEquipment";
import VehicleType from "./Filters/VehicleType/VehicleType";
import Button from "../../common/Button/Button";
import { FiltersStyled, SideBarStyled } from "./SideBar.styled";
import Location from "./Location/Location";

const SideBar = ({
  selectedFilters,
  selectedBackendFilters,
  handleFilter,
  handleBackendFilter,
  handleSubmit,
  selectedAutomaticFilters,
  handleAutomaticFilter,
}) => {
  return (
    <SideBarStyled>
      <Location />
      <FiltersStyled>
        <h5>Filters</h5>
        <VehicleEquipment
          selectedFilters={selectedFilters}
          handleFilter={handleFilter}
          selectedAutomaticFilters={selectedAutomaticFilters}
          handleAutomaticFilter={handleAutomaticFilter}
        />
        <VehicleType
          selectedFilters={selectedBackendFilters}
          handleFilter={handleBackendFilter}
        />
      </FiltersStyled>
      <Button type="button" handler={handleSubmit}>
        Search
      </Button>
    </SideBarStyled>
  );
};

export default SideBar;
