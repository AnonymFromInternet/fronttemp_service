import React from "react";

import styles from "./Loading.module.css";

import refresh from "../../assets/images/refresh.svg";

export const Loading = () => {
  return (
    <div className={styles["loading"]}>
      <img src={refresh} alt="Loading" />
    </div>
  );
};
