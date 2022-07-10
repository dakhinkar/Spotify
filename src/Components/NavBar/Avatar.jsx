import React from "react";
import {CgProfile} from 'react-icons/cg';
import styles from './NavBar.module.css';
import { useStateProvider} from '../../utils/StateProvider';
function Avatar(props) {
  const [{userInfo}] = useStateProvider();
  return (
    <div className={styles.avatar}>
      <a href="#">
        <CgProfile />
        <span>{userInfo.userName}</span>
      </a>
    </div>
  );
}

export default Avatar;
