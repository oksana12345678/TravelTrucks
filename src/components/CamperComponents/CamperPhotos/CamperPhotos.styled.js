import styled from "styled-components";
import { Swiper } from "swiper/react";

export const SwiperStyle = styled(Swiper)`
  height: 320px;

  width: ${(props) => (props.$isCamperPage ? "292px" : "1312px")};

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 320px;
    width: 292px;
  }
`;

export const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 10px;
`;
