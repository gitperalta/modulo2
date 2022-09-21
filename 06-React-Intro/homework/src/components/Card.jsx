import React from "react";
import styles from "./styles/Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={styles.card}>
      <h4 className={styles.city}>
        {props.name}
        <button onClick={props.onClose} className={styles.btn}>
          X
        </button>
      </h4>
      <div className={styles.temperatures}>
        <div className={styles.min}>
          <p>Min</p>
          <p>{props.min}</p>
        </div>
        <div className={styles.max}>
          <p>Max</p>
          <p>{props.max}</p>
        </div>
        <img
          className={styles.imagen}
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt={"img"}
        />
      </div>
    </div>
  );
}
