import react from "react";
import "./style.css";
import Navbar from "./Navbar";
import * as React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BedroomParentRoundedIcon from "@mui/icons-material/BedroomParentRounded";
import BathtubRoundedIcon from "@mui/icons-material/BathtubRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const DescriptionPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="main">
      <div className="nav">
        <Navbar />
      </div>
      <div className="hotelname">
        <h1>Mirror House Sud</h1>
      </div>
      <div className="location">
        <p>Bolzano, Trentino-Alto Adige/South Tyrol, Italy</p>
      </div>
      <div className="price">
        <h1>$1500 /night</h1>
      </div>
      <div>
        <button className="btn-1">
          Check Availability{" "}
          <span className="icon-1">
            <CalendarMonthIcon />
          </span>
        </button>
      </div>
      <div>
        <span className="icon-2">
          <PeopleAltIcon />
          <p className="info-1">4 guests</p>
          <BedroomParentRoundedIcon />
          <p className="info-2">2 Bedroom</p>
          <BathtubRoundedIcon />
          <p className="info-3">1 Bathroom</p>
        </span>
      </div>
      <div className="desc">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br /> Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <br />
          when an unknown printer took a galley of type and scrambled it to make
          a type <br />
          specimen book. It has survived not only five centuries, but also the
          leap into <br />
          electronic typesetting, remaining essentially unchanged. It was
          popularised in <br />
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, <br />
          and more recently with desktop publishing software like Aldus
          PageMaker including <br />
          versions of Lorem Ipsum.
        </p>
      </div>
      <div className="show">
        <a href="/more">Show more</a>
      </div>
      <div className="ul-1">
        <ul>
          <li>
            <ArrowRightAltRoundedIcon />
            Air Conditioning / Heating
          </li>
          <li>
            <ArrowRightAltRoundedIcon />
            Sun Loungers
          </li>
          <li>
            <ArrowRightAltRoundedIcon />
            Breakfast
          </li>
          <li>
            <ArrowRightAltRoundedIcon />
            Locker
          </li>
        </ul>
      </div>
      <div className="ul-2">
        <ul>
          <li>
            <ArrowRightAltRoundedIcon />
            WiFi
          </li>
          <li>
            <ArrowRightAltRoundedIcon />
            Swimming Pool
          </li>
          <li>
            <ArrowRightAltRoundedIcon />
            Dedicated Workspace
          </li>
          <li>
            <ArrowRightAltRoundedIcon />
            Pets Allowed
          </li>
        </ul>
      </div>
      <div className="photos">
        <img
          id="img1"
          src={
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          }
          alt="image1"
        />
        <img
          id="img2"
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="image2"
        />
        <img
          id="img3"
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="image3"
        />
        <img
          id="img4"
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="image4"
        />
      </div>
      <div className="review">
        <h1 className="icon-3">
          <StarPurple500SharpIcon />
          Reviews
        </h1>
        <img
          class="img5"
          src="https://randomuser.me/api/portraits/women/17.jpg"
          alt="user-img"
        />
        <p className="userName">Alen Wood</p>
        <p className="testimonial">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          dignissimos blanditiis similique quod quaerat et recusandae tempora.
          Animi error quaerat labore cum! Ratione veritatis culpa illo quo
          molestiae minima repudiandae
        </p>
      </div>
    </div>
  );
};

export default DescriptionPage;
