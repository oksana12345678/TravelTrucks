import styled from "styled-components";
import { Swiper } from "swiper/react";

export const SwiperStyle = styled(Swiper)`
  @media screen and (min-width: 320px) {
    height: 320px;

    width: ${(props) => (props.$isCamperPage ? "292px" : "292px")};

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      height: 320px;
      width: 292px;
    }
  }
  @media screen and (min-width: 768px) {
    width: ${(props) => (props.$isCamperPage ? "600px" : "292px")};
  }

  @media screen and (min-width: 1440px) {
    width: ${(props) => (props.$isCamperPage ? "1312px" : "292px")};
  }
`;

export const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 10px;
`;
