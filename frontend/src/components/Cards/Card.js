import React from "react";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
const Card = ({ data }) => {
  return (
    <div className="card">
      <Link to={`/details/` + data._id}>
        <div className="card-img">
          <Swiper
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
                <img src={src} className="card-img" alt={` ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
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
      </Link>
    </div>
  );
};

export default Card;
