import DescList from "../../../DescList/DescList";
import {
  VehicleDetailsList,
  VehicleDetailsListItem,
  VehicleDetailsListWrapper,
  VehicleDetailsStyled,
  VehicleDetailsTitle,
} from "./VehicleDetails.styled";

const VehicleDetails = ({ camper }) => {
  const {
    consumption,
    engine,
    form,
    height,
    length,
    microwave,
    refrigerator,
    tank,
    width,
  } = camper;

  const vehicleDetails = {
    Consumption: consumption,
    Engine: engine,
    Form: form,
    Height: height,
    Length: length,
    Microwave: microwave ? "Available" : "Not Available",
    Refrigerator: refrigerator ? "Available" : "Not Available",
    "Water Tank Capacity": tank,
    Width: width,
  };

  return (
    <VehicleDetailsStyled>
      <DescList camper={camper} />
      <VehicleDetailsListWrapper>
        <VehicleDetailsTitle>Vehicle details</VehicleDetailsTitle>
        <VehicleDetailsList>
          {Object.entries(vehicleDetails).map(([key, value], index) => (
            <VehicleDetailsListItem key={index}>
              <strong>{key}:</strong>
              <span>{value}</span>
            </VehicleDetailsListItem>
          ))}
        </VehicleDetailsList>
      </VehicleDetailsListWrapper>
    </VehicleDetailsStyled>
  );
};

export default VehicleDetails;
