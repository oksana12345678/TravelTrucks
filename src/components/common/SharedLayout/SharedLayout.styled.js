import styled from "styled-components";

export const HeaderStyle = styled.header`
  @media screen and (min-width: 768px) {
    padding: 24px 0;
    background-color: ${(props) =>
      props.$isCatalog ? "var(--primary-inputs-color)" : "var(--white)"};
  }
`;
