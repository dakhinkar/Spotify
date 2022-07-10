import React from "react";

import styles from "./PlayListHeader.module.css";
import { AiFillClockCircle } from "react-icons/ai";
import { useStateProvider } from "../../utils/StateProvider";

function PlayListHeader(props) {
  const [{ token, headerBg }, dispatch] = useStateProvider();
  return (
    <div className={styles.list}>
      <div
        className={styles.header_row}
        style={{ backgroundColor: headerBg ? "#000000dc" : "none" }}
      >
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
