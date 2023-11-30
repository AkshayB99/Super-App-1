import { useState, useEffect } from "react";
import axios from "axios";
import weaCss from "./Weather.module.css";
import tempImg from "../assets/Temperature_img.png";
import humidityImg from "../assets/Humidity_img.png";
import windImg from "../assets/Wind_img.png";

function Weather() {
  const [data, setData] = useState();

  const currentDateTime = new Date(); //date initilization
  const [formattedTime, setFormattedTime] = useState(
    currentDateTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
  );

  const getData = async () => {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=2ef7af4e16cb42d38c7121610232911&q=Bangalore"
    );
    try {
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateTime = () => {
    const newTime = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    setFormattedTime(newTime);
  };

  useEffect(() => {
    getData();
    const intervalId = setInterval(() => {
      getData();
      updateTime();
    }, 60000); // 60000 milliseconds = 1 minute

    // Clean up interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  // Check if data is not available yet
  if (!data) {
    return <div>Loading...</div>;
  }

  const formattedDate =
    currentDateTime.getMonth() +
    1 +
    "-" +
    currentDateTime.getDate() +
    "-" +
    currentDateTime.getFullYear();

  return (
    <>
      <div>
        <div className={weaCss.upper}>
          <div className={weaCss.upperData}>
            <p className={weaCss.date}>{formattedDate}</p>
            <p className={weaCss.time}>{formattedTime}</p>
          </div>
        </div>
        <dir className={weaCss.lower}>
          <div className={weaCss.condition}>
            <div className={weaCss.conditionContent}>
              <img
                src={data?.current?.condition?.icon}
                className={weaCss.wetherIcon}
                alt=""
              />
              <p>{data?.current?.condition?.text}</p>
            </div>
          </div>
          <div className={weaCss.line}></div>
          <div className={weaCss.temp}>
            <div>
              <h2 className={weaCss.temperature}>
                {data?.current?.temp_c}&deg;C
              </h2>
              <div className={weaCss.mbar}>
                <img src={tempImg} alt="" className={weaCss.tempIcon} />
                <p className={weaCss.Text}>
                  {data?.current?.pressure_mb}&nbsp;mbar <br /> Pressure
                </p>
              </div>
            </div>
          </div>
          <div className={weaCss.line}></div>
          <div className={weaCss.humidity}>
            <div className={weaCss.windCont}>
              <img src={windImg} className={weaCss.windIcon} alt="" />
              <p className={weaCss.Text}>
                {data?.current?.wind_kph}&nbsp;kph <br /> Wind
              </p>
            </div>
            <dir className={weaCss.humi}>
              <img src={humidityImg} className={weaCss.humidityIcon} alt="" />
              <p className={weaCss.Text}>
                {data?.current?.humidity}&nbsp;% <br /> Humidity
              </p>
            </dir>
          </div>
        </dir>
      </div>
    </>
  );
}

export default Weather;
