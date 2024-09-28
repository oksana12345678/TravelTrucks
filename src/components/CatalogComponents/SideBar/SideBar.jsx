import VehicleEquipment from "./Filters/VehicleEquipment/VehicleEquipment";
import VehicleType from "./Filters/VehicleType/VehicleType";
import Location from "./Location/Location";
import Button from "../../common/Button/Button";
import { FiltersStyled, SideBarStyled } from "./SideBar.styled";

const SideBar = ({
  selectedFilters,
  handleFilter,
  handleFiltered,
  handleSubmit,
}) => {
  return (
    <SideBarStyled>
      <Location />
      <FiltersStyled>
        <h5>Filters</h5>
        <VehicleEquipment
          selectedFilters={selectedFilters}
          handleFilter={handleFilter}
        />
        <VehicleType
          handleFiltered={handleFiltered}
          selectedFilters={selectedFilters}
        />
      </FiltersStyled>
      <Button type="button" handler={handleSubmit}>
        Search
      </Button>
    </SideBarStyled>
  );
};

export default SideBar;
