import styled from "styled-components";

export const FeaturesStyled = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 0 0 80px 0;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
