import React, { useEffect } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constant";
import axios from "axios";
import styles from "./CurrentTrack.module.css";
function CurrentTrack(props) {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrnetTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data !== "") {
        const { item } = response.data;
        const currentlyPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          image: item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
      }
    };
    getCurrnetTrack();
  }, [token, dispatch]);
  return (
    <div className={styles.container}>
      {currentlyPlaying && (
        <div className={styles.track}>
          <div className={styles.track_image}>
            <img src={currentlyPlaying.image} alt="currentlyPlaying" />
          </div>
          <div className={styles.track_info}>
            <h4>{currentlyPlaying.name}</h4>
            <h6>{currentlyPlaying.artists.join(", ")}</h6>
          </div>
        </div>
      )}
    </div>
  );
}

export default CurrentTrack;
