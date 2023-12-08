import React from "react";
import entCss from "./Entertainmnts.module.css";
import DispEntertainment from "../../components/dispEntertainment";
import user2 from "../../assets/user2.png";
import { useNavigate } from "react-router-dom";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Entertainments = () => {
  const localData = JSON.parse(localStorage.getItem("selectedGenre"));
  const navigate = useNavigate()
  return (
    <>
      <div className={entCss.mainCont}>
        <div className={entCss.main}>
          <div>
            <div className={entCss.Header}>
              <div>
                <h2 className={entCss.heading}>Super App</h2>
                <div>
                  <p className={entCss.subHeading}>
                    Entertainment according to your choice
                  </p>
                </div>
              </div>
              {/* <div onClick={() => navigate('/home')}>
                <img src={user2} />
              </div> */}
            </div>
            <div className={entCss.movies}>
              {localData.map((data) => {
                return (
                  <div key={data}>
                    <p className={entCss.genre}>
                      {capitalizeFirstLetter(data)}
                    </p>
                    <DispEntertainment data={data} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entertainments;
