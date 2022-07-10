import React from "react";
import { useStateProvider } from "../../utils/StateProvider";
import styles from "./AlbumHeader.module.css";
function AlbumHeader(props) {
  const [{ token, selectedPlaylist }, dispatch] = useStateProvider();
  return (
    <div className={styles.playlist}>
      <div className={styles.image}>
        <img src={selectedPlaylist.image} alt="selectedList" />
      </div>
      <div className={styles.details}>
        <span className={styles.type}>PLAYLIST</span>
        <h1 className={styles.title}>{selectedPlaylist.name}</h1>
        <p className={styles.description}>{selectedPlaylist.description}</p>
      </div>
    </div>
  );
}

export default AlbumHeader;
