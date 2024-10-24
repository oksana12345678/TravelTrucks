import styled from "styled-components";

export const ReviewsMainContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 40px;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
    padding: 80px;
  }
`;
