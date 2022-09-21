import React from "react";
import styles from "./styles/SearchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={styles.container}>
      <input type="text" placeholder={"Ciudad..."} />
      <button
        className={styles.btn}
        onClick={() => props.onSearch("Buscando Ciudad")}
      >
        Agregar
      </button>
    </div>
  );
}
