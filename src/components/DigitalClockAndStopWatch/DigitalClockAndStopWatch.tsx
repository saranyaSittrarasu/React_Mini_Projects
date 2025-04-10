import { useState, useEffect } from "react";

const DigitalClockAndStopWatch = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);
  const [isStart, setIsStart] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    const countTimer = setInterval(() => {
      if (isStart) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 1000);
    return () => clearInterval(countTimer);
  }, [isStart]);
  const startCount = () => {
    setIsStart(isStart ? false : true);
  };

  const resetCount = () => {
    setCount(0);
    setIsStart(false);
  };
  return (
    <div>
      <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>Digital Clock</h1>
      <div style={{ fontSize: "50px", color: "blue" }}>
        {time.toLocaleTimeString()}
      </div>
      <div style={{ fontSize: "50px", color: "blue" }}>
        {time.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <hr />
      <div>
        <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>
          Count and Stop Timer
        </h1>
        <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>{count}</h1>
        <button
          onClick={() => setIsStart(true)}
          style={{
            backgroundColor: "green",
            padding: "10px",
            marginRight: "10px",
          }}
        >
          Resume
        </button>
        <button
          onClick={resetCount}
          style={{
            backgroundColor: "green",
            padding: "10px",
            marginRight: "10px",
          }}
        >
          Reset
        </button>
        <button
          style={{
            backgroundColor: "green",
            padding: "10px",
            marginRight: "10px",
          }}
          onClick={startCount}
        >
          {isStart ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default DigitalClockAndStopWatch;
