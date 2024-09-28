import { useNavigate } from "react-router";
import CamperPhotos from "../../CamperComponents/CamperPhotos/CamperPhotos";
import DescList from "../../CamperComponents/DescList/DescList";
import Button from "../../common/Button/Button";
import { DescText, DiscCamperCatalogContainer } from "./CamperListItem.styled";
import NameAndPrice from "../../CamperComponents/NameAndPrice/NameAndPrice";
import RatingLocation from "../../CamperComponents/RatingLocation/RatingLocation";

const CamperListItem = ({ camper }) => {
  const navigate = useNavigate();

  const { id, description, gallery, location, name, price, rating, reviews } =
    camper;

  const handleClick = () => {
    navigate(`/catalog/${id}`);
  };

  return (
    <>
      <CamperPhotos gallery={gallery} name={name} />
      <DiscCamperCatalogContainer>
        <div>
          <NameAndPrice price={price} name={name} id={id} />
          <RatingLocation
            location={location}
            rating={rating}
            reviews={reviews}
          />
        </div>
        {description && <DescText>{description}</DescText>}
        <DescList camper={camper} />
        <Button type="button" handler={handleClick}>
          Show more
        </Button>
      </DiscCamperCatalogContainer>
    </>
  );
};

export default CamperListItem;
