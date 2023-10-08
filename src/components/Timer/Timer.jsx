import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ min, sec }) => {
  const [minute, setMinute] = useState(min);
  const [second, setSecond] = useState(sec);
  const [run, setRun] = useState(false);

  useEffect(() => {
    let interval = 0;
    if (run) {
      interval = setInterval(() => {
        setSecond(second - 1);
      }, 1000);
    }

    if (second === 0 && minute === 0) {
      setRun(false);
      return clearInterval(interval);
    }

    if (second < 0) {
      setSecond(59);
      setMinute(minute - 1);
    }
    return () => clearInterval(interval);
  }, [run, second, minute]);

  const startTimer = () => {
    setRun(true);
  };

  const pauseTimer = () => {
    setRun(false);
  };

  return (
    <span className="description">
      <button type="button" label="play" className="icon icon-play" onClick={startTimer} />
      <button type="button" label="pause" className="icon icon-pause" onClick={pauseTimer} />
      <span className="timer-display">
        {(minute < 10 ? '0' : '') + minute}:{(second < 10 ? '0' : '') + second}
      </span>
    </span>
  );
};


export default Timer;

Timer.defaultProps = {
  min: 0,
  sec: 0,
};

Timer.propTypes = {
  min: PropTypes.number,
  sec: PropTypes.number,
};