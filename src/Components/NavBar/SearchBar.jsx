import React from "react";
import {FaSearch} from 'react-icons/fa';
import styles from './NavBar.module.css';
import {useStateProvider} from "../../utils/StateProvider"
function SearchBar(props) {
  const [{token, isSearching}, dispatch] = useStateProvider();
  return (
    <div className={styles.search_bar} style={{visibility:  isSearching ? "visible" : "hidden" }}>
      <FaSearch />
      <input type="text" placeholder="Artist, Songs, or podcasts" />
    </div>
  );
}

export default SearchBar;
