import React, { useEffect, useState } from "react";
import Navbar from "../Landing Page/Navbar";
import "../Individual Page/style.css";
import AttributionOutlinedIcon from "@mui/icons-material/AttributionOutlined";
import KingBedTwoToneIcon from "@mui/icons-material/KingBedTwoTone";
import BathtubTwoToneIcon from "@mui/icons-material/BathtubTwoTone";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import Review from "./Review";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:3001/images/${id}`).then((response) => {
      setPlace(response.data);
      console.log(response.data);
    });
  });
  if (!place) return "";
  return (
    <div>
      <Navbar />
      <div className="whole">
        <div className="left">
          <div className="property-info">
            <div className="property-title">
              <h1>{place.HotelName}</h1>
              <p>
                {place.Address.City},{place.Address.Country}
              </p>
              <span>
                <strong>₹{place.Rooms[2].BaseRate}</strong>/night
              </span>
            </div>
            <div className="property-availability"></div>
            <div className="hotel-info">
              <div className="room-details">
                <AttributionOutlinedIcon sx={{ fontSize: "2rem" }} />
                <p> {place.Rooms[2].SleepsCount} Guests</p>
              </div>
              <div className="room-details">
                <KingBedTwoToneIcon sx={{ fontSize: "2rem" }} />
                <p>{place.Rooms[2].BedOptions}</p>
              </div>
              <div className="room-details">
                <BathtubTwoToneIcon sx={{ fontSize: "2rem" }} />
                <p>2 Bathrooms</p>
              </div>
            </div>
            <div className="descrpt">
              <p>{place.Description}</p>
            </div>
            <div className="amentity">
              <ul>
                {place.Amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
            <div className="review">
              <div className="review-head">
                <div className="rating">
                  <StarRateRoundedIcon />
                  <strong>{place.Rating}</strong>
                </div>
                <div className="no-of-review">
                  <p>55 reviews</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="review-details">
                  <div>
                    <AccountBoxRoundedIcon sx={{ fontSize: "3rem" }} />
                  </div>
                  <div className="review-name">
                    <strong>{place.Review[0].Name}</strong>
                    <p>April 2023</p>
                  </div>
                </div>
                <div className="description">
                  <p>
                    Vivamus eget nisl ut velit blandit condimentum ac non nisl.
                    Fusce ut interdum tellus, at bibendum arcu. Curabitur ut
                    elit ut arcu bibendum cursus. Nullam at suscipit urna.
                    Integer consectetur lorem nec justo facilisis, et facilisis
                    est cursus.
                  </p>
                </div>
              </div>
              <Review />
              <Review />
            </div>
            <div className="contact">
              <p>Name</p>
              <p>Email</p>
              <p>Numbr</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="addons">
            <div className="weather">weather</div>
            <div className="location">map</div>
          </div>
          <div className="images">
            <div className="div1">
              <img
                className="div-img"
                src={place.Links[0]}
                alt="Image from DB"
              />
            </div>
            <div className="div2">
              <div className="div2-1">
                <img
                  className="div-img"
                  src={place.Links[1]}
                  alt="Image from DB"
                />
              </div>
              <div className="div2-2">
                <img
                  className="div-img"
                  src={place.Links[2]}
                  alt="Image from DB"
                />
              </div>
            </div>
            <div className="div3">
              <img
                className="div-img"
                src={place.Links[3]}
                alt="Image from DB"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
