import styled from "styled-components";

export const CamperContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 0 64px;
`;

export const NameLocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.h3`
  font-family: var(--font-family);
  font-weight: var(--bolt-font);
  font-size: 24px;
  line-height: 1.33333;
  color: var(--main-color);
`;

export const NameLocationLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CamperDescText = styled.p`
  width: 100%;
  font-family: var(--font-family);
  font-weight: var(--regular-font);
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-text-color);
`;
