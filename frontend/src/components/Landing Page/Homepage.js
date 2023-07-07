import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import SearchBar from "./Searchbar";
import CallMadeRoundedIcon from "@mui/icons-material/CallMadeRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const div = document.getElementById("myDiv");
// const images = [
//   "https://plus.unsplash.com/premium_photo-1680100349214-45e2685d4746?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
//   "https://plus.unsplash.com/premium_photo-1674500522724-3d2a371d4c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80",
//   "https://images.unsplash.com/photo-1687985190469-ed3e48b0a745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
//   "https://images.unsplash.com/photo-1688488994043-ffb1a6c211f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
// ];
// let currentIndex = 0;

// function changeBackground() {
//   div.style.backgroundImage = `url('${images[currentIndex]}')`;
//   currentIndex = (currentIndex + 1) % images.length;
// }

// setInterval(changeBackground, 5000);
const Homepage = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="body">
        <div className="left-side">
          <div className="quote">
            <h1>Lodging awaits, A tranquil retreat</h1>
          </div>
          <div className="desc">
            <p>
              Plan your dream escape effortlessly, elevate your travel
              experience, and create cherished memories with our handpicked
              accommodations.
            </p>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
        <div className="right-side">
          <div className="first-div" id="myDiv">
            <h1>Exceptional Properties Located in Stunning Surroundings</h1>

            <div>
              <button className="button1">
                Show Top-Rated Villas{" "}
                <CallMadeRoundedIcon
                  sx={{ fontSize: "15px", paddingLeft: "10px" }}
                />
              </button>
            </div>
          </div>
          <div className="second-div">
            <p>2,000+</p>
            <p>Unique Places</p>
          </div>
          <div className="third-div">
            <div className="left-div">
              <p>Recommended Places</p>
              <button className="map">
                <LocationOnIcon sx={{ marginTop: "5px" }} />
              </button>
            </div>
            <div className="right-div">
              <p>Private Island Rentals</p>
              <button className="map">
                <LocationOnIcon sx={{ marginTop: "5px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
