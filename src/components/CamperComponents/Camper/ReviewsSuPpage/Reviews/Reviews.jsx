import { useSelector } from "react-redux";
import { selectOneCamper } from "../../../../../redux/camper/selectors";

import Icon from "../../../../common/IconComponent/IconComponent";
import {
  Comment,
  LatterContainer,
  Letter,
  LetterAndNameContainer,
  NameRatingContainer,
  ReviewsList,
  ReviewsListItem,
} from "./Review.styled";

const Reviews = () => {
  const oneCamper = useSelector(selectOneCamper);
  const { reviews } = oneCamper;

  const renderStars = (rating) => {
    const maxStars = 5;
    const stars = [];

    for (let i = 0; i < maxStars; i++) {
      if (i < rating) {
        stars.push(
          <Icon
            key={i}
            id="icon-star"
            width={16}
            height={16}
            color={"var(--rating-color)"}
          />
        );
      } else {
        stars.push(<Icon key={i} id="icon-star" width={16} height={16} />);
      }
    }

    return stars;
  };

  return (
    <div>
      {reviews && (
        <ReviewsList>
          {reviews.map((review, index) => (
            <ReviewsListItem key={index}>
              <LetterAndNameContainer>
                <LatterContainer>
                  <Letter>{review.reviewer_name.charAt(0)}</Letter>
                </LatterContainer>
                <NameRatingContainer>
                  <p>{review.reviewer_name}</p>
                  <p>{renderStars(review.reviewer_rating)}</p>
                </NameRatingContainer>
              </LetterAndNameContainer>
              <Comment>{review.comment}</Comment>
            </ReviewsListItem>
          ))}
        </ReviewsList>
      )}
    </div>
  );
};

export default Reviews;
