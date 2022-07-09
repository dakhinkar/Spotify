import React from "react";
import {CgProfile} from 'react-icons/cg';
import styles from './NavBar.module.css';
function Avatar(props) {
  return (
    <div className={styles.avatar}>
      <a href="#">
        <CgProfile />
        <span>name</span>
      </a>
    </div>
  );
}

export default Avatar;
