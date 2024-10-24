import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CamperPageSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 48px;
`;

export const MiniMenuBarContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 60px 16px;

    &::after {
      content: "";
      background-color: var(--secondary-gray-light);
      height: 1px;
    }
  }
  @media screen and (min-width: 1440px) {
    padding: 60px 64px 0 64px;
  }
`;

export const ActiveLinkStyled = styled(NavLink)`
  font-family: var(--font-family);
  font-weight: var(--bolt-font);
  font-size: 20px;
  line-height: 1.2;
  color: var(--main-color);
  position: relative;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -28px;
    left: 0;
    width: 0;
    height: 5px;
    background-color: var(--primary-red-orang-color);
    transition: width 0.3s ease-in-out;
  }

  &.active::after {
    width: 100%;
  }

  &:hover::after,
  &:focus::after,
  &:active::after {
    width: 100%;
  }
`;

export const MiniMenuBarList = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`;

export const LoaderCamper = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 1000;
`;
