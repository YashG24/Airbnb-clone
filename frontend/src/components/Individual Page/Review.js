import React from "react";
import "./style.css";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
const Review = () => {
  return (
    <div>
      <div className="review-details">
        <div>
          <AccountBoxRoundedIcon sx={{ fontSize: "3rem" }} />
        </div>
        <div className="review-name">
          <strong>Kaveh</strong>
          <p>April 2023</p>
        </div>
      </div>
      <div className="description">
        <p>
          Vivamus eget nisl ut velit blandit condimentum ac non nisl. Fusce ut
          interdum tellus, at bibendum arcu. Curabitur ut elit ut arcu bibendum
          cursus. Nullam at suscipit urna. Integer consectetur lorem nec justo
          facilisis, et facilisis est cursus.
        </p>
      </div>
    </div>
  );
};

export default Review;
