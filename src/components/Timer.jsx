import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import timeCss from "./Timer.module.css";
import timeUp from "../assets/timeup.png";
import timeDown from "../assets/timedown.png";

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function Timer() {
  const [key, setKey] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    const newTotalSeconds = hours * 3600 + minutes * 60 + seconds;
    setTotalSeconds(newTotalSeconds);
  }, [hours, minutes, seconds]);

  const handleIncrement = (unit) => {
    const maxValues = { hours: 25, minutes: 60, seconds: 60 };

    switch (unit) {
      case "hours":
        setHours((prevHours) => (prevHours + 1) % maxValues.hours);
        break;
      case "minutes":
        setMinutes((prevMinutes) => (prevMinutes + 1) % maxValues.minutes);
        break;
      case "seconds":
        setSeconds((prevSeconds) => (prevSeconds + 1) % maxValues.seconds);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (unit) => {
    const maxValues = { hours: 25, minutes: 60, seconds: 60 };

    switch (unit) {
      case "hours":
        setHours(
          (prevHours) => (prevHours - 1 + maxValues.hours) % maxValues.hours
        );
        break;
      case "minutes":
        setMinutes(
          (prevMinutes) =>
            (prevMinutes - 1 + maxValues.minutes) % maxValues.minutes
        );
        break;
      case "seconds":
        setSeconds(
          (prevSeconds) =>
            (prevSeconds - 1 + maxValues.seconds) % maxValues.seconds
        );
        break;
      default:
        break;
    }
  };

  const resetTimer = () => {
    setKey((prevKey) => prevKey + 1);
    setIsTimerRunning(false);
  };

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  return (
    <>
      <div className={timeCss.App}>
        <div className="timer-wrapper">
          <div className={timeCss.bgCircle}>
            <CountdownCircleTimer
              key={key}
              isPlaying={isTimerRunning}
              duration={totalSeconds}
              colors={[["#FF6A6A"]]}
              onComplete={() => {
                resetTimer();
                return [false, 1000];
              }}
              strokeWidth={6}
              trailColor="transparent"
            >
              {({ remainingTime }) => (
                <div className="timer-coundown">
                  <div className={timeCss.value}>
                    {formatTime(remainingTime)}
                  </div>
                </div>
              )}
            </CountdownCircleTimer>
          </div>
        </div>
        <div className={timeCss.rightTime}>
          <div className={timeCss.setTime}>
            <div className={timeCss.setHMS}>
              <p className={timeCss.timeHead}>Hours</p>
              <img
                src={timeUp}
                alt=""
                onClick={() => handleIncrement("hours")}
              />
              <p className={timeCss.time00}>
                {hours.toString().padStart(2, "0")}
              </p>
              <img
                src={timeDown}
                alt=""
                onClick={() => handleDecrement("hours")}
              />
            </div>
            <p className={timeCss.deviders}>:</p>
            <div className={timeCss.setHMS}>
              <p className={timeCss.timeHead}>Minutes</p>
              <img
                src={timeUp}
                alt=""
                onClick={() => handleIncrement("minutes")}
              />
              <p className={timeCss.time00}>
                {minutes.toString().padStart(2, "0")}
              </p>
              <img
                src={timeDown}
                alt=""
                onClick={() => handleDecrement("minutes")}
              />
            </div>
            <p className={timeCss.deviders}>:</p>
            <div className={timeCss.setHMS}>
              <p className={timeCss.timeHead}>Seconds</p>
              <img
                src={timeUp}
                alt=""
                onClick={() => handleIncrement("seconds")}
              />
              <p className={timeCss.time00}>
                {seconds.toString().padStart(2, "0")}
              </p>
              <img
                src={timeDown}
                alt=""
                onClick={() => handleDecrement("seconds")}
              />
            </div>
          </div>
          <div className={timeCss.setTimeBtn}>
            <button className={timeCss.timeBtn} onClick={startTimer}>
              Start
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
