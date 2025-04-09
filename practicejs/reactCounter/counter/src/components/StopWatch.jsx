import React, { useState, useEffect } from "react";

// Generic Timer Component (Stopwatch or Countdown)
function Timer({ type = "stopwatch", startTime = 60, id }) {
  const [time, setTime] = useState(type === "countdown" ? startTime : 0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (type === "countdown") {
            if (prev === 0) {
              clearInterval(interval);
              return 0;
            }
            return prev - 1;
          } else {
            return prev + 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval); // Cleanup
  }, [running, type]);

  const handleStart = () => setRunning(true);
  const handlePause = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setTime(type === "countdown" ? startTime : 0);
  };

  return (
    <div style={{ border: "1px solid gray", padding: 16, margin: 8 }}>
      <h3>{type.toUpperCase()} Timer #{id}</h3>
      <h2>{time}s</h2>
      <button onClick={handleStart} disabled={running}>Start</button>
      <button onClick={handlePause} disabled={!running}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

// Parent Component managing multiple timers
export default function TimerApp() {
  const [timers, setTimers] = useState([
    { id: 1, type: "stopwatch" },
    { id: 2, type: "countdown", startTime: 10 },
  ]);

  const addTimer = (type) => {
    const newId = timers.length + 1;
    setTimers([
      ...timers,
      { id: newId, type, startTime: type === "countdown" ? 60 : undefined },
    ]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Multi-Timer App</h1>
      <button onClick={() => addTimer("stopwatch")}>Add Stopwatch</button>
      <button onClick={() => addTimer("countdown")}>Add Countdown</button>
      {timers.map((timer) => (
        <Timer
          key={timer.id}
          id={timer.id}
          type={timer.type}
          startTime={timer.startTime}
        />
      ))}
    </div>
  );
}


