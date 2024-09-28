import styled from "styled-components";

export const DiscCamperCatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 524px;
  gap: 24px;
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
