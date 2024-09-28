import styled from "styled-components";

export const VehicleDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  background-color: var(--primary-inputs-color);
  width: 632px;
  padding: 44px 54px;
  border-radius: 10px;
`;

export const VehicleDetailsListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const VehicleDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const VehicleDetailsTitle = styled.h3`
  display: flex;
  flex-direction: column;
  gap: 24px;
  &::after {
    content: "";
    width: 526px;
    height: 1px;
    background-color: var(--secondary-gray-light);
  }
`;

export const VehicleDetailsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
