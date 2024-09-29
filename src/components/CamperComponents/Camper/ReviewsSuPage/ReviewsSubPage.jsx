import BookCamperForm from "../Features/BookCamperForm/BookCamperForm";
import Reviews from "./Reviews/Reviews";
import { ReviewsMainContainer } from "./ReviewsSubPage.styled";

const ReviewsSubPage = () => {
  return (
    <ReviewsMainContainer>
      <Reviews />
      <BookCamperForm />
    </ReviewsMainContainer>
  );
};

export default ReviewsSubPage;
