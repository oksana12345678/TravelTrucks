import styled from "styled-components";

export const ButtonView = styled.button`
  @media screen and (min-width: 320px) {
    border: none;
    border-radius: 200px;
    width: 140px;
    height: 40px;
    background: var(--primary-red-orang-color);
    color: var(--white);
    transition: background 0.4s ease;
    cursor: pointer;

    &:hover {
      background: var(--button-hover-color);
    }
  }

  @media screen and (min-width: 768px) {
    width: 172px;
    height: 56px;
  }
`;
