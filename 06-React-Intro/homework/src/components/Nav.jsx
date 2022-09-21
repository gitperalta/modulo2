import React from "react";
import styles from "./styles/Nav.module.css";

export default function Nav(props) {
  return (
    <div className={styles.maincontainer}>
      <h1>Hola soy una Homework</h1>
      <input type="text" placeholder="escribe" />
    </div>
  );
}
