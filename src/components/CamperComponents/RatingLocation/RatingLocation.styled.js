import { BsMap } from "react-icons/bs";
import styled from "styled-components";

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

export const RatingAndLocationContainer = styled.div`
  display: flex;
  gap: 16px;
`;
