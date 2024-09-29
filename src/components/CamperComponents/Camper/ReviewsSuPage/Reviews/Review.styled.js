import styled from "styled-components";

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 44px;
`;

export const ReviewsListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LatterContainer = styled.div`
  border-radius: 60px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-gray-color);
`;

export const Letter = styled.p`
  font-size: 24px;
  color: var(--primary-red-orang-color);
  font-family: var(--font-family);
  font-weight: var(--bolt-font);
  font-size: 24px;
  line-height: 1.33333;
`;

export const LetterAndNameContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const NameRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: var(--font-family);
  font-weight: var(--medium-font);
  font-size: 16px;
  line-height: 1.5;
  color: var(--main-color);
`;

export const Comment = styled.p`
  font-family: var(--font-family);
  font-weight: var(--regular-font);
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-text-color);
`;
