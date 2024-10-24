import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    padding: 0 16px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 64px;
  }
`;

export const Navigation = styled.nav`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

export const Logo = styled.a`
  @media screen and (min-width: 320px) {
    font-family: var(--font-family);
    font-weight: var(--bolt-font);
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const LogoFirstWord = styled.p`
  @media screen and (min-width: 320px) {
    color: var(--main-color);
    font-weight: inherit;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const LogoSecondWord = styled.p`
  @media screen and (min-width: 320px) {
    color: var(--primary-text-color);
    font-weight: inherit;
  }
`;

export const NavList = styled.ul`
  @media screen and (min-width: 320px) {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const NavListItem = styled.li`
  @media screen and (min-width: 768px) {
  }
`;

export const NavListItemLink = styled(NavLink)`
  @media screen and (min-width: 320px) {
    font-family: var(--font-family);
    font-weight: var(--medium-font);
    font-size: 16px;
    line-height: 150%;
    color: var(--main-color);
    position: relative;

    &.active {
      font-weight: bold;
      color: var(--primary-red-orang-color);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary-red-orang-color);
      transition: width 0.3s ease-in-out;
    }

    &:hover::after,
    &:focus::after {
      width: 100%;
    }

    &.active::after {
      width: 100%;
    }
  }
`;
