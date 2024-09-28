import { useSelector } from "react-redux";
import BookCamperForm from "./BookCamperForm/BookCamperForm";
import { FeaturesStyled } from "./Features.styled";
import VehicleDetails from "./VehicleDetails/VehicleDetails";
import { selectOneCamper } from "../../../../redux/camper/selectors";

const Features = () => {
  const oneCamper = useSelector(selectOneCamper);
  return (
    <FeaturesStyled>
      <VehicleDetails camper={oneCamper} />
      <BookCamperForm />
    </FeaturesStyled>
  );
};

export default Features;
