import React from "react";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import styles from "./Sidebar.module.css";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constant";
function Sidebar(props) {
  const [{ token, isSearching }, dispatch] = useStateProvider();
  const onClickSearch = (value) => {
    dispatch({ type: reducerCases.SET_SEARCH_CLICK, isSearching: value });
  };
  return (
    <div className={styles.container}>
      <div className={styles.top_links}>
        <div className={styles.logo}>
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="spotify"
          />
        </div>
        <ul>
          <li onClick={() => onClickSearch(false)}>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li onClick={() => onClickSearch(true)}>
            <MdSearch />
            <span>Search</span>
          </li>
          <li onClick={() => onClickSearch(false)}>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <div>
        <hr />
        playlist
      </div>
    </div>
  );
}

export default Sidebar;
