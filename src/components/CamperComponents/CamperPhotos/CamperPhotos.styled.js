import styled from "styled-components";
import { Swiper } from "swiper/react";

export const SwiperStyle = styled(Swiper)`
  width: 292px;
  height: 320px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border-radius: 10px;
    background-color: #f0f0f0;
  }
`;

export const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 10px;
`;
