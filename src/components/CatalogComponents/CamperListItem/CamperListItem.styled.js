import styled from "styled-components";

export const DiscCamperCatalogContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    max-width: 280px;
    gap: 24px;
  }

  @media screen and (min-width: 768px) {
    max-width: 524px;
  }
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
