import React from "react";
import axios from "axios";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constant";

import styles from "./PlayerControl.module.css";
function PlayerControl(props) {
  const [{ token, playerState }, dispatch] = useStateProvider();

  const changeTrack = async (type) => {
    console.log(type);
    await axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
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
      console.log(currentlyPlaying);
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
    } else {
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
    }
  };

  const changeState = async () => {
    const state = playerState ? "pause" : "play";
    await axios.put(
      `https://api.spotify.com/v1/me/player/${state}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: reducerCases.SET_PLAYER_STATE,
      playerState: !playerState,
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.shuffle}>
        <BsShuffle />
      </div>
      <div className={styles.previous}>
        <CgPlayTrackPrev onClick={() => changeTrack("previous")} />
      </div>
      <div className={styles.state}>
        {playerState ? (
          <BsFillPauseCircleFill onClick={changeState} />
        ) : (
          <BsFillPlayCircleFill onClick={changeState} />
        )}
      </div>
      <div className={styles.next}>
        <CgPlayTrackNext onClick={() => changeTrack("next")} />
      </div>
      <div className={styles.repeat}>
        <FiRepeat />
      </div>
    </div>
  );
}

export default PlayerControl;
