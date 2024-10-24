import styled from "styled-components";

export const SideBarStyled = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`;

export const FiltersStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
