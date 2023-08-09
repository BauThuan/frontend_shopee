import React, { useState, useEffect } from "react";
import { FaRegHandPointRight } from "react-icons/fa";

import "./Countdown.scss";

function Countdown() {
  const [countdown, setCountdown] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const endTime = new Date();
    endTime.setHours(24, 0, 0); // Đặt thời gian kết thúc là 15:00:00

    const timer = setInterval(() => {
      const now = new Date();
      const timeDifference = endTime - now;

      if (timeDifference <= 0) {
        clearInterval(timer);
        setCountdown("Kết thúc thời gian flash sale!");
      } else {
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        setCountdown(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="time-count-down">
      <div className="time-text">
        <i>Flash Sale</i>
        <FaRegHandPointRight />
      </div>
      <div className="time-out">{countdown}</div>
    </div>
  );
}

export default Countdown;
