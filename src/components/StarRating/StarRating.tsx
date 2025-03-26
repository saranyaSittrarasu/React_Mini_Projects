import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [selectedRating, setSelectedRating] = useState("");
  const data = new Map([
    ["1", "Terrible"],
    ["2", "Poor"],
    ["3", "Good"],
    ["4", "Great"],
    ["5", "Excellent"],
  ]);

  function handleClick(getCurrentIndex: number) {
    setRating(getCurrentIndex);
    setSelectedRating(data.get(getCurrentIndex.toString())!);
  }

  function handleMouseEnter(getCurrentIndex: number) {
    setHover(getCurrentIndex);
    setSelectedRating(data.get(getCurrentIndex.toString())!);
  }

  function handleMouseLeave() {
    if (hover !== rating) {
      setHover(rating);
      setSelectedRating(data.get(rating.toString())!);
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "30px", margin: "10px" }}>
        Star Rating
      </h1>
      <div style={{ width: "100%", cursor: "pointer" }}>
        {[...Array(5)].map((_, index) => {
          index += 1;
          return (
            <FontAwesomeIcon
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              key={index}
              onClick={() => handleClick(index)}
              icon={index <= (hover || rating) ? faStarSolid : faStar}
              size="5x"
              color="gold"
            />
          );
        })}
        <p style={{ textAlign: "center", fontSize: "30px", margin: "10px" }}>
          {selectedRating}
        </p>
      </div>
    </div>
  );
};

export default StarRating;
