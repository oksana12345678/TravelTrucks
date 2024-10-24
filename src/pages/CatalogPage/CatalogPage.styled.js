import styled from "styled-components";

export const SectionStyle = styled.section`
  @media screen and (min-width: 320px) {
    padding: 22px 0;
    max-width: 1440px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    padding: 48px 0;
  }
`;

export const MainContainer = styled.div`
  @media screen and (min-width: 320px) {
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 32px;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 64px;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ShowFilterButton = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const SidebarContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  }

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;
