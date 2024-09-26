import VehicleEquipment from "./Filters/VehicleEquipment/VehicleEquipment";
import Location from "./Location/Location";

const SideBar = () => {
  return (
    <div>
      <Location />
      <h5>Filters</h5>
      <VehicleEquipment />
    </div>
  );
};

export default SideBar;
