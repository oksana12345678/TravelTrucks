import CamperPhotos from "../CamperPhotos/CamperPhotos";
import { Price } from "../NameAndPrice/NameAndPrice.styled";
import RatingLocation from "../RatingLocation/RatingLocation";
import {
  CamperContainerStyled,
  CamperDescText,
  Name,
  NameLocationDiv,
  NameLocationLocationContainer,
} from "./Camper.styled";

const Camper = ({ oneCamper }) => {
  const { description, gallery, location, name, price, rating, reviews } =
    oneCamper;

  return (
    <CamperContainerStyled>
      <NameLocationLocationContainer>
        <NameLocationDiv>
          <Name>{name}</Name>
          <RatingLocation
            location={location}
            rating={rating}
            reviews={reviews}
          />
        </NameLocationDiv>

        <Price> €{price}</Price>
      </NameLocationLocationContainer>

      {gallery && (
        <CamperPhotos gallery={gallery} name={name} slidesToShow={4} />
      )}
      <CamperDescText>{description}</CamperDescText>
    </CamperContainerStyled>
  );
};

export default Camper;
