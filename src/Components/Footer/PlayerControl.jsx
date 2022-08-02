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
    await axios
      .post(
        `https://api.spotify.com/v1/me/player/${type}?device_id=+this._device_id`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => {
        let errText = err.response.data.error;
        if (errText.reason === "PREMIUM_REQUIRED") {
          dispatch({
            type: reducerCases.SET_ERROR,
            title: errText.reason,
            message: errText.message,
          });
        }
      });
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
    let response = await axios
      .put(
        `https://api.spotify.com/v1/me/player/${state}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => {
        let errText = err.response.data.error;
        if (errText.reason === "PREMIUM_REQUIRED") {
          dispatch({
            type: reducerCases.SET_ERROR,
            title: errText.reason,
            message: errText.message,
          });
        }
      });
    if (response) {
      dispatch({
        type: reducerCases.SET_PLAYER_STATE,
        playerState: !playerState,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.shuffle} title="Shuffle">
        <BsShuffle />
      </div>
      <div className={styles.previous} title="Previous">
        <CgPlayTrackPrev onClick={() => changeTrack("previous")} />
      </div>
      <div className={styles.state} title="Play/Pause">
        {playerState ? (
          <BsFillPauseCircleFill onClick={changeState} />
        ) : (
          <BsFillPlayCircleFill onClick={changeState} />
        )}
      </div>
      <div className={styles.next} title="Next">
        <CgPlayTrackNext onClick={() => changeTrack("next")} />
      </div>
      <div className={styles.repeat} title="Repeat">
        <FiRepeat />
      </div>
    </div>
  );
}

export default PlayerControl;
