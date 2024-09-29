import styled from "styled-components";

export const MainVehicleContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
`;

export const OptionListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 8px;
`;

export const VehicleTitle = styled.h3`
  display: flex;
  flex-direction: column;
  font-family: var(--font-family);
  font-weight: var(--bolt-font);
  font-size: 20px;
  line-height: 1.2;
  color: var(--main-color);
  gap: 24px;

  &::after {
    content: "";
    display: block;
    width: 360px;
    height: 1px;
    background-color: var(--secondary-gray-light);
  }
`;

export const DescListItem = styled.button`
  border: 1px solid var(--secondary-gray-light);
  border-radius: 12px;
  width: 112px;
  height: 96px;
  gap: 8px;
  font-family: var(--font-family);
  font-weight: var(--medium-font);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  text-align: center;
  color: var(--main-color);
  background-color: var(--primary-gray-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    border-color: var(--primary-red-orang-color);
  }

  ${(props) =>
    props.$isSelected &&
    `
    border-color: var(--primary-red-orang-color);
  `}
`;
