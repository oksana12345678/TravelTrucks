import styled from "styled-components";

export const NameAndPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: var(--font-family);
  font-weight: var(--bolt-font);
  font-size: 24px;
  line-height: 1.33333;
  color: var(--main-color);
`;

export const Price = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-family);
  font-weight: var(--bolt-font);
  font-size: 24px;
  line-height: 1.33333;
  color: var(--main-color);
`;

export const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;
`;
