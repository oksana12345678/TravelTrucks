import styled from "styled-components";

export const CamperListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const CamperListItemStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 888px;
  height: 368px;
  border: 1px solid var(--secondary-gray-light);
  border-radius: 20px;
  padding: 24px;
  gap: 24px;
`;

export const ContainerCamperList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const ButtonCamperList = styled.button`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--secondary-gray-light);
  border-radius: 200px;
  padding: 16px 32px;
  background: transparent;
  font-family: var(--font-family);
  font-weight: var(--medium-font);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: var(--main-color);

  &:hover {
    border: 1px solid var(--button-hover-color);
  }
`;
