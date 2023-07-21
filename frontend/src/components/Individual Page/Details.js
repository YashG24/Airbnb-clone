import React, { useEffect, useState } from "react";
import Navbar from "../Landing Page/Navbar";
import "../Individual Page/style.css";
import AttributionOutlinedIcon from "@mui/icons-material/AttributionOutlined";
import KingBedTwoToneIcon from "@mui/icons-material/KingBedTwoTone";
import BathtubTwoToneIcon from "@mui/icons-material/BathtubTwoTone";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import Review from "./Review";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:3001/images/${id}`).then((response) => {
      setPlace(response.data);
    });
  });

  if (!place) return "";

  return (
    <>
      <div>
        <Navbar />
        <div className="whole">
          <div className="left">
            <div className="property-info">
              <div className="property-title">
                <h1>{place.HotelName}</h1>
                <p>
                  {place.Address.City}, {place.Address.State},{" "}
                  {place.Address.Country}
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
                  <p> {place.Rooms[0].Restroom} Bathrooms</p>
                </div>
              </div>
              <div className="descrpt">
                <p>{place.Description}</p>
              </div>
              <div className="amentity">
                <ul className="amenity-list">
                  {place.Amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
              <div className="review">
                <div className="review-head">
                  <div className="rating">
                    <strong>{place.Rating}</strong>
                    <StarRateRoundedIcon />
                  </div>
                  <div className="no-of-review">
                    <p style={{ fontSize: "20px" }}>
                      {place.NoOfReviews} Reviews
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {place.Review.map((review, index) => (
                  <Review
                    key={index}
                    Name={place.Review[index].Name}
                    Desc={place.Review[index].Desc}
                    Month={place.Review[index].Month}
                    Year={place.Review[index].Year}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="right">
            <div className="addons">
              <div className="weather">
                <div>Temp:</div>
              </div>
              <div className="location">
                <iframe
                  width="350"
                  height="200"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?q=26.9124,75.7973&hl=us&z=16&amp;output=embed"
                  allowfullscreen="true"
                ></iframe>
              </div>
            </div>
            <div className="images">
              <div className="div1">
                <img className="div-img" src={place.Links[0]} alt=" from DB" />
              </div>
              <div className="div2">
                <div className="div2-1">
                  <img
                    className="div-img"
                    src={place.Links[1]}
                    alt=" from DB"
                  />
                </div>
                <div className="div2-2">
                  <img
                    className="div-img"
                    src={place.Links[2]}
                    alt=" from DB"
                  />
                </div>
              </div>
              <div className="div3">
                <img className="div-img" src={place.Links[3]} alt=" from DB" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <div>Get in Touch</div>
        <div className="divide">
          <p>Owner Name: {place.Owner.Name}</p>
          <p>{place.Owner.Email}</p>
          <p>+91 {place.Owner.Number}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
