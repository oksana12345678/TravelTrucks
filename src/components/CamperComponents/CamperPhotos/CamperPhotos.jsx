import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { ImageStyle, SwiperStyle } from "./CamperPhotos.styled.js";
import { useLocation } from "react-router";

const CamperPhotos = ({ gallery, name }) => {
  const location = useLocation();
  const isCamperPage = location.pathname === "/catalog/:camperId";

  return (
    <SwiperStyle
      $isCamperPage={isCamperPage}
      modules={[Navigation, Pagination]}
      speed={1000}
      navigation
      pagination={{ clickable: true }}
      direction="horizontal"
      slidesPerView="auto"
      spaceBetween={48}
    >
      <ul>
        {gallery.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <ImageStyle src={img.thumb} alt={name} />
            </SwiperSlide>
          );
        })}
      </ul>
    </SwiperStyle>
  );
};

export default CamperPhotos;
