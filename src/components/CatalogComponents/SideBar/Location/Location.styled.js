import styled from "styled-components";
import { BsMap } from "react-icons/bs";

export const LocationLabel = styled.label`
  @media screen and (min-width: 320px) {
    font-family: var(--font-family);
    font-weight: var(--regular-font);
    font-size: 16px;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    width: 280px;
    gap: 8px;
    color: var(--secondary-gray-text-color);
    position: relative;
  }

  @media screen and (min-width: 768px) {
    width: 360px;
  }
`;

export const MapIcon = styled(BsMap)`
  position: absolute;
  top: 68%;
  left: 20px;
  transform: translateY(-60%);
  color: var(--secondary-gray-text-color);
  transition: color 0.3s ease;
  width: 20px;
  height: 20px;
`;

export const LocationInput = styled.input`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 56px;
    background-color: var(--primary-inputs-color);
    font-size: 16px;
    line-height: 1.5;
    border: none;
    border-radius: 12px;
    color: var(--main-color);
    padding-left: 48px;
    outline: transparent;

    &::placeholder {
      color: var(--secondary-gray-text-color);
    }

    &:focus + ${MapIcon} {
      color: var(--main-color);
    }
  }
`;
