import React, { useState, useEffect } from "react";

function Timer() {
    const [currTime, setTime] = useState(new Date().toLocaleString());

    useEffect(() => {
      let tUpdate = setInterval(() => {
        setTime(new Date().toLocaleString());
      }, 1000);
      return () => clearInterval(tUpdate);
    }, []);
    return (
      <div>
        <p>Today : {currTime}</p>
      </div>
    );
}

export default Timer;
