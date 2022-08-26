import React, { useState } from "react";
import { IoLibrary } from "react-icons/io5";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { MdHomeFilled, MdSearch } from "react-icons/md";
import styles from "./Sidebar.module.css";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constant";
import PlayList from "../PlayList/PlayList";
function Sidebar(props) {
  const [isVisible, setISVisible] = useState(false);
  const [{ token, isSearching, selectedPlaylistId }, dispatch] =
    useStateProvider();
  const onClickSearch = (value) => {
    dispatch({ type: reducerCases.SET_SEARCH_CLICK, isSearching: value });
  };

  const onClickHome = () => {
    onClickSearch(false);
    dispatch({
      type: reducerCases.SET_SELECTED_PLAYLIST_ID,
      selectedPlaylistId: null,
    });
  };
  return (<>

    <div className={`${styles.container} ${styles.containerSm} ${isVisible ? styles.containerXm : ""}`}>
      <div className={styles.menuIcon}>
        {
          isVisible ? <ImCross onClick={() => setISVisible(false)} /> : <GiHamburgerMenu onClick={() => setISVisible(true)} />
        }
      </div>
      <div className={styles.top_links}>
        <div className={styles.logo}>
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="spotify"
          />
        </div>
        <ul>
          <li onClick={onClickHome}>
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
        <PlayList />
      </div>
    </div>
  </>
  );
}

export default Sidebar;
