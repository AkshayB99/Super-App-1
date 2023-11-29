import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Entertainment.css";
import Category from "../../components/Category";
import err from "../../assets/error.png";

function Entertainment() {
  const navigate = useNavigate();
  const genres = [
    { id: 1, name: "action", color: "#ff5209" },
    { id: 2, name: "drama", color: "#D7A4FF" },
    { id: 3, name: "romance", color: "#148A08" },
    { id: 4, name: "thriller", color: "#84C2FF" },
    { id: 5, name: "western", color: "#902500" },
    { id: 6, name: "horror", color: "#7358FF" },
    { id: 7, name: "fantasy", color: "#FF4ADE" },
    { id: 8, name: "music", color: "#E61E32" },
    { id: 9, name: "fiction", color: "#6CD061" },
  ];

  const [selectedGenre, setSelectedGenre] = useState([]);
  const [minError, setMinError] = useState(false);

  const handleClick = (genre, id) => {
    setSelectedGenre([...selectedGenre, genre]);
  };

  const checkMinimumSelection = () => {
    return selectedGenre.length >= 3 ? true : setMinError((err) => !err);
  };

  const handleNextPage = () => {
    if (checkMinimumSelection() === true) {
      localStorage.setItem("selectedGenre", JSON.stringify(selectedGenre));
      navigate("/home");
    }
  };

  const handleRemoveGenre = (genre) => {
    setSelectedGenre((prev) => prev.filter((g) => g !== genre));
  };
  console.log(selectedGenre);
  return (
    <>
      <div className="main-box">
        <div className="left">
          <div className="left-content">
            <h1 className="superApp-heading2">Super app</h1>
            <p className="bwlow-heading">Choose your entertainment category</p>
            <div className="selected">
              {selectedGenre
                .filter((genre, index, self) => self.indexOf(genre) === index)
                .map((uniqueGenre, id) => (
                  <div className="selected-genre-btn" key={id}>
                    {uniqueGenre}{" "}
                    <span
                      className="deselect"
                      onClick={() => handleRemoveGenre(uniqueGenre)}
                    >
                      X
                    </span>
                  </div>
                ))}
            </div>
            <div>
              {minError && selectedGenre.length < 3 ? (
                <p className="minError">
                  <img src={err} alt="danger" width={15} /> Minimum 3 category
                  required
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-content">
            <div className="gene">
              {genres.map((genre) => (
                <Category
                  key={genre.id}
                  id={genre.id}
                  genre={genre.name}
                  color={genre.color}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
          <div className="nextPageOpt">
            <button className="nextPageBtn" onClick={handleNextPage}>
              Next Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Entertainment;
