import React from "react";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-img">
        <Swiper
          swiperClickable={true}
          slidesPerView={1}
          spaceBetween={15}
          loop={true}
          mousewheel={true}
          cssMode={true}
          pagination
          navigation
          modules={[Pagination, Navigation]}
          className="swiper-container"
        >
          {data.Links.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} className="card-img" alt={`Image ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* {data.Links.map((link, index) => (
          <img key={index} src={link} alt={`Image ${index + 1}`} />
        ))} */}
      </div>
      <div>
        <div className="card-info">
          <h3 className="card-title">{data.HotelName}</h3>
          <div className="card-rating">
            <h4>{data.Rating}</h4>
            <StarRateRoundedIcon />
          </div>
        </div>
        <p style={{ margin: 0 }}>
          <strong>₹{data.Rooms[0].BaseRate}</strong>/night
        </p>
        <p style={{ margin: 0 }}>{data.Category}</p>
      </div>
    </div>
  );
};

export default Card;
