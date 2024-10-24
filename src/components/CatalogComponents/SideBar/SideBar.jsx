import VehicleEquipment from "./Filters/VehicleEquipment/VehicleEquipment";
import VehicleType from "./Filters/VehicleType/VehicleType";
import Button from "../../common/Button/Button";
import { FiltersStyled, SideBarStyled } from "./SideBar.styled";
import Location from "./Location/Location";

const SideBar = ({ backendFilters, setBackendFilters, handleSubmit }) => {
  const isFilterSelected = (equipment) =>
    backendFilters?.some((filter) => filter.label === equipment.label);

  return (
    <>
      <SideBarStyled>
        <Location
          isFilterSelected={isFilterSelected}
          backendFilters={backendFilters}
          setBackendFilters={setBackendFilters}
        />

        <FiltersStyled>
          <h5>Filters</h5>
          <VehicleEquipment
            isFilterSelected={isFilterSelected}
            backendFilters={backendFilters}
            setBackendFilters={setBackendFilters}
          />
          <VehicleType
            isFilterSelected={isFilterSelected}
            backendFilters={backendFilters}
            setBackendFilters={setBackendFilters}
          />
        </FiltersStyled>
        <Button type="button" handler={handleSubmit}>
          Search
        </Button>
      </SideBarStyled>
    </>
  );
};

export default SideBar;
