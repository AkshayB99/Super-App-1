import React, { useState } from "react";
import "./categoryStyle.css";
import action from "../assets/action.png";
import drama from "../assets/drama.png";
import romance from "../assets/romance.png";
import thriller from "../assets/thriller.png";
import fantasy from "../assets/fantasy.png";
import horror from "../assets/horror.png";
import music from "../assets/music.png";
import western from "../assets/western.png";
import fiction from "../assets/fiction.png";

function Category({ genre, color, handleClick, id }) {
  const [isClicked, setIsClicked] = useState(false)
  const genreImages = {
    action,
    drama,
    romance,
    thriller,
    fantasy,
    horror,
    music,
    western,
    fiction,
  };

  const clicked = () => {
    setIsClicked(true)
    handleClick(genre, id);
  }

  return (
    <div
      className="categorys"
      onClick={clicked}
      style={{ backgroundColor: `${color}`, border: isClicked === true  ?  '4px solid green' : "",}}  
    >
      <p className="genre-name">{genre}</p>
      <img src={genreImages[genre]} alt="" />
    </div>
  );
}

export default Category;
