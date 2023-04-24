import React, { useState, useEffect } from 'react';

function App() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [timerInterval, setTimerInterval] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMuteUnmute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timerInterval]);

  useEffect(() => {
    const alarmSound = document.getElementById("alarm-sound");
    alarmSound.volume = isMuted ? 0 : 1;
  }, [isMuted]);

  const togglePauseResume = () => {
    if (isPaused) {
      const startTime = Date.now() - elapsedTime * 1000;
      setTimerInterval(setInterval(() => updateTimer(startTime), 1000));
      const alarmSound = document.getElementById("alarm-sound");
      alarmSound.play();

    } else {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
    setIsPaused(!isPaused);
  };

  const updateTimer = (startTime) => {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    setElapsedTime(elapsedTime);

    const alarmSound = document.getElementById("alarm-sound");
    alarmSound.play();

    if (elapsedTime === 0 && !isPaused) {
      alarmSound.play();
    }
  };

  const formatTime = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    seconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    clearInterval(timerInterval);
    setTimerInterval(null);
    setElapsedTime(0);
    setIsPaused(true);
  };

  return (
    <div id="timer-buttons-container">
      <div id="timer">{formatTime(elapsedTime)}</div>
      <div className="buttons-container">
        <button className="timer-button" onClick={togglePauseResume}>
          {isPaused ? 'Start' : 'Pause'}
        </button>
        <button className="timer-button" onClick={resetTimer}>
          Reset
        </button>
        <button id="mute-unmute" className="mute-unmute" onClick={toggleMuteUnmute}>
          <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
        </button>
      </div>
    </div>
  );
}

export default App;
