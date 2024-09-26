import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { ImageStyle, SwiperStyle } from "./camperPhotos.styled";

const CamperPhotos = ({ gallery, name }) => {
  return (
    <SwiperStyle
      modules={[Navigation, Pagination]}
      speed={1000}
      navigation
      pagination={{ clickable: true }}
      direction="horizontal"
      slidesPerView={1}
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
