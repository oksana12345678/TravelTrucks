import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { ImageStyle, SwiperStyle } from "./CamperPhotos.styled.js";
import { useLocation } from "react-router";
import { DotLoader } from "react-spinners";
import { LoaderCamper } from "../../../pages/CamperPage/CamperPage.styled.js";
import { selectIsLoading } from "../../../redux/camper/selectors.js";
import { useSelector } from "react-redux";

const CamperPhotos = ({ gallery, name, slidesToShow }) => {
  const location = useLocation();
  const isCamperPage =
    location.pathname === "/catalog/:camperId/features" ||
    "/catalog/:camperId/reviews";
  const loading = useSelector(selectIsLoading);

  return (
    <>
      {loading ? (
        <LoaderCamper>
          <DotLoader color="var( --primary-text-color)" />
        </LoaderCamper>
      ) : (
        <SwiperStyle
          $isCamperPage={isCamperPage}
          modules={[Navigation, Pagination]}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
          direction="horizontal"
          slidesPerView={slidesToShow}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
          }}
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
      )}
    </>
  );
};

export default CamperPhotos;
