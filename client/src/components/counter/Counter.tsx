import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import styles from "./styles/Counter.module.scss";
import axios from "axios";

export default function Counter(): JSX.Element {
  const counterRef = useRef(null);
  const [isCounting, setIsCounting] = useState(false);
  const [allUsersCount, setAllUsersCount] = useState(0);

  useEffect(() => {
    const allUsers = async () => {
      const { data } = await axios("/api/auth/allUsers");
      setAllUsersCount(data);
    };
    allUsers();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Начать анимацию счетчика
            setIsCounting(true);
          }
        });
      },
      { threshold: 0.7 }, // Начинать анимацию, когда элемент видим на   70%
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [allUsersCount, counterRef]);

  return (
    <div className={styles.counter} ref={counterRef}>
      {isCounting && (
        <CountUp
          className={styles.count}
          start={0}
          end={allUsersCount + 2100}
          duration={2} // Длительность анимации в секундах
          separator="."
          decimals={0}
          prefix=""
          suffix=""
          onEnd={() => {
            // Выполнить действие после завершения анимации
          }}
        />
      )}
      <p>пользователей уже в Pinter</p>
    </div>
  );
}
