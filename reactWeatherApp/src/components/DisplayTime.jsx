import React, { useEffect, useState } from "react";
import moment from "moment";

const style = {
  color: "white",
  fontSize: "10px",
};

function DisplayTime() {
  const [currentTime, setCurrentTime] = useState(
    moment().format("D MMMM, dddd HH:mm")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("D MMMM, dddd HH:mm"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={style}>
      <p>{currentTime}</p>
    </div>
  );
}

export default DisplayTime;
