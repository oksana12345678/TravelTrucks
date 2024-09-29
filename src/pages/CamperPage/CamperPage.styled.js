import { Link } from "react-router-dom";
import styled from "styled-components";

export const CamperPageSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 48px;
`;

export const MiniMenuBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 60px 64px 0 64px;

  &::after {
    content: "";
    background-color: var(--secondary-gray-light);
    height: 1px;
  }
`;

export const MiniMenuBarList = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`;

export const LinkStyled = styled(Link)`
  font-family: var(--font-family);
  font-weight: var(--bolt-font);
  font-size: 20px;
  line-height: 1.2;
  color: var(--main-color);
  position: relative;

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

  &:hover::after,
  &:focus::after,
  &:active::after {
    width: 100%;
  }
`;

export const LoaderCamper = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 1000;
`;
