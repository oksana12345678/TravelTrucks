import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 0 64px;
  }
`;

export const Navigation = styled.nav`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

export const Logo = styled.a`
  @media screen and (min-width: 768px) {
    font-family: var(--font-family);
    font-weight: var(--bolt-font);
    display: flex;
    font-size: 20px;
  }
`;

export const LogoFirstWord = styled.p`
  @media screen and (min-width: 768px) {
    color: var(--main-color);
    font-weight: inherit;
    font-size: 20px;
  }
`;

export const LogoSecondWord = styled.p`
  @media screen and (min-width: 768px) {
    color: var(--primary-text-color);
    font-weight: inherit;
  }
`;

export const NavList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 32px;
    width: 100%;
  }
`;

export const NavListItem = styled.li`
  @media screen and (min-width: 768px) {
  }
`;

export const NavListItemLink = styled(Link)`
  @media screen and (min-width: 768px) {
    font-family: var(--font-family);
    font-weight: var(--medium-font);
    font-size: 16px;
    line-height: 150%;
    color: var(--main-color);
    &:hover {
      color: var(--button-hover-color);
      transition: color 0.4s ease;
    }
  }
`;
