import React from "react";
import "./Home.css";
import userImg from "../../assets/user.png";
import Weather from "../../components/Weather";
import News from "../../components/News";

function Home() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const catSelection = JSON.parse(localStorage.getItem("selectedGenre"));

  return (
    <>
      <div className="bg-color">
        <div className="main-container">
          <div className="user-info">
            <img src={userImg} alt="" />
            <div className="user-info-right">
              <div className="user-details">
                <p className="user">{user.name}</p>
                <p className="user">{user.email}</p>
                <p className="user-name">{user.username}</p>
              </div>
              <div className="catSelected">
                {catSelection.map((cat) => (
                  <p className="cat" key={cat}>
                    {cat}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="all-notes">group2</div>
          <div className="newsinfo">
            <News />
          </div>
          <div className="weather">
            <Weather />
          </div>
          <div className="timer">group5</div>
          <button className="browseBtn">Browse</button>
        </div>
      </div>
    </>
  );
}

export default Home;
