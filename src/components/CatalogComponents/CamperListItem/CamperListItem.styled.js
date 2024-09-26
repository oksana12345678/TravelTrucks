import styled from "styled-components";
import { BsMap } from "react-icons/bs";

export const DiscCamperCatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 524px;
  gap: 24px;
`;

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
  justify-content: center;
  gap: 12px;
  font-family: var(--font-family);
  font-weight: var(--bolt-font);
  font-size: 24px;
  line-height: 1.33333;
  color: var(--main-color);
`;

export const RatingAndLocationContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const DescText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  font-family: var(--font-family);
  font-weight: var(--regular-font);
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-text-color);
`;

// export const Reviews = styled.span`
//   display: flex;
//   gap: 6px;
// `;

export const Rating = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;

  font-family: var(--font-family);
  font-weight: var(--regular-font);
  font-size: 16px;
  line-height: 1.5;
  color: var(--main-color);
`;

export const MapIcon = styled(BsMap)`
  color: var(--main-color);
  transition: color 0.3s ease;
  width: 16px;
  height: 16px;
`;

export const LocationStyled = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;

  font-family: var(--font-family);
  font-weight: var(--regular-font);
  font-size: 16px;
  line-height: 1.5;
  color: var(--main-color);
`;
