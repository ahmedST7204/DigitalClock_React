import React, { useEffect } from "react";
import "./DigitalClock.css"; // CSS connection

const DigitalClock = () => {
  useEffect(() => {
    const clock = () => {
      const hours = document.getElementById("hours");
      const minutes = document.getElementById("minutes");
      const seconds = document.getElementById("seconds");
      const period = document.getElementById("period");

      const now = new Date();
      let h = now.getHours();
      let m = now.getMinutes();
      let s = now.getSeconds();

      const ampm = h >= 12 ? "PM" : "AM";
      if (h > 12) h = h - 12;

      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;

      if (hours) hours.innerHTML = h;
      if (minutes) minutes.innerHTML = m;
      if (seconds) seconds.innerHTML = s;
      if (period) period.innerHTML = ampm;
    };

    const interval = setInterval(clock, 1000);
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="digital-clock">
      <div className="time">
        <div className="left-side">
          <span id="hours">00</span>
        </div>
        <div className="right-side">
          <div className="right-top">
            <span id="dots">:</span>
            <span id="minutes">00</span>
          </div>
          <div className="right-down">
            <span id="period">PM</span>
            <span id="seconds">00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;