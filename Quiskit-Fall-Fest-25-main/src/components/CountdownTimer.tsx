import React, { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const eventDate = new Date('2026-10-05T08:30:00+05:30').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.countdownTitle}>Event Starts In</div>
      <div className={styles.timerGrid}>
        <div className={styles.timeBox}>
          <span className={styles.timeValue}>{String(timeLeft.days).padStart(2, '0')}</span>
          <span className={styles.timeLabel}>Days</span>
        </div>
        <div className={styles.timeSeparator}>:</div>
        <div className={styles.timeBox}>
          <span className={styles.timeValue}>{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className={styles.timeLabel}>Hours</span>
        </div>
        <div className={styles.timeSeparator}>:</div>
        <div className={styles.timeBox}>
          <span className={styles.timeValue}>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className={styles.timeLabel}>Mins</span>
        </div>
        <div className={styles.timeSeparator}>:</div>
        <div className={styles.timeBox}>
          <span className={styles.timeValue}>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className={styles.timeLabel}>Secs</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
