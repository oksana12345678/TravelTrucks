import Icon from "../../common/IconComponent/IconComponent.jsx";
import {
  LocationStyled,
  MapIcon,
  Rating,
  RatingAndLocationContainer,
} from "./RatingLocation.styled.js";

const RatingLocation = ({ rating, reviews, location }) => {
  return (
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
  );
};

export default RatingLocation;
