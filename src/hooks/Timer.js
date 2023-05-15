import { useEffect, useState } from "react";

export const useTimer = () => {
  const [timer, setTimer] = useState(60);
  const [timers, setTimers] = useState(false);

  const restartTimer = () => {
    setTimer(60);
  };

  const startTimer = () => {
    setTimers(true);
  };

  const stopTimer = () => {
    setTimers(false);
  };

  useEffect(() => {
    if (!timers) return;

    if (timer <= 0) return;

    const id = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [timer, timers]);

  return {
    timer,
    timers,
    startTimer,
    stopTimer,
    restartTimer,
  };
};
