import styled from "styled-components";

export const HeaderStyle = styled.header`
  @media screen and (min-width: 320px) {
    padding: 24px 0;
    height: 72px;
    background-color: ${(props) =>
      props.$isHome ? "var(--white)" : "var(--primary-inputs-color)"};
  }
`;
