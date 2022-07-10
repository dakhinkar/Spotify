import React from "react";

import styles from "./PlayListHeader.module.css";
import { AiFillClockCircle } from "react-icons/ai";
function PlayListHeader(props) {
  return (
    <div className={styles.list}>
      <div className={styles.header_row}>
        <div className={styles.col}>
          <span>#</span>
        </div>
        <div className={styles.col}>
          <span>TITLE</span>
        </div>
        <div className={styles.col}>
          <span>ALBUM</span>
        </div>
        <div className={styles.col}>
          <span>
            <AiFillClockCircle />
          </span>
        </div>
      </div>
    </div>
  );
}

export default PlayListHeader;
