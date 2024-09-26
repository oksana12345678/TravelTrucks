import CamperPhotos from "../../CamperComponents/CamperPhotos/CamperPhotos";
import DescList from "../../CamperComponents/DescList/DescList";
import Button from "../../common/Button/Button";
import Icon from "../../common/IconComponent/IconComponent";
import {
  DescText,
  DiscCamperCatalogContainer,
  LocationStyled,
  MapIcon,
  NameAndPriceContainer,
  Price,
  Rating,
  RatingAndLocationContainer,
} from "./CamperListItem.styled";

const CamperListItem = ({ camper }) => {
  const { description, gallery, location, name, price, rating, reviews } =
    camper;

  return (
    <>
      <CamperPhotos gallery={gallery} name={name} />
      <DiscCamperCatalogContainer>
        <div>
          <NameAndPriceContainer>
            {name && <h3>{name}</h3>}
            {price && (
              <Price>
                €{price}
                <Icon id="icon-heart" width={26} height={24} />
              </Price>
            )}
          </NameAndPriceContainer>
          <RatingAndLocationContainer>
            {rating && (
              <Rating>
                <Icon
                  id="icon-star"
                  width={16}
                  height={16}
                  color={"var(--rating-color)"}
                />
                {rating}
                {reviews.length > 0 && <span>({reviews.length} Reviews)</span>}
              </Rating>
            )}
            {location && (
              <LocationStyled>
                <MapIcon />
                {location}
              </LocationStyled>
            )}
          </RatingAndLocationContainer>
        </div>
        {description && <DescText>{description}</DescText>}
        <DescList camper={camper} />
        <Button>Show more</Button>
      </DiscCamperCatalogContainer>
    </>
  );
};

export default CamperListItem;
