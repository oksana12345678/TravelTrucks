import { useDispatch, useSelector } from "react-redux";
import Icon from "../../common/IconComponent/IconComponent";
import {
  FavoriteButton,
  NameAndPriceContainer,
  Price,
} from "./NameAndPrice.styled";
import { setFavorite } from "../../../redux/filter/slice";
import { selectIsFavorite } from "../../../redux/filter/selectors"; // Змінено імпорт

const NameAndPrice = ({ name, price, id }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => selectIsFavorite(state, id)); // Використання нового селектора

  const handleFavorite = () => {
    dispatch(setFavorite(id));
  };

  return (
    <NameAndPriceContainer>
      {name && <h3>{name}</h3>}
      {price && (
        <Price>
          €{price}
          <FavoriteButton onClick={handleFavorite}>
            <Icon
              id="icon-heart"
              width={26}
              height={24}
              color={isFavorite ? "red" : "gray"}
            />
          </FavoriteButton>
        </Price>
      )}
    </NameAndPriceContainer>
  );
};

export default NameAndPrice;
