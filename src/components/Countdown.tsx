import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = ({ date }: any) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime: any = new Date();
      const distance = date - currentTime;
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <>
      <div className="countdown">
        <div className="countdown-item">
          <h2 className="countdown-value">{timeLeft.days}</h2>
          <p className="countdown-label">Days</p>
        </div>
        <div className="countdown-item">
          <h2 className="countdown-value">{timeLeft.hours}</h2>
          <p className="countdown-label">Hours</p>
        </div>
        <div className="countdown-item">
          <h2 className="countdown-value">{timeLeft.minutes}</h2>
          <p className="countdown-label">Minutes</p>
        </div>
        <div className="countdown-item">
          <h2 className="countdown-value">{timeLeft.seconds}</h2>
          <p className="countdown-label">Seconds</p>
        </div>
      </div>
    </>
  );
};

export default Countdown;
