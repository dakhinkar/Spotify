import React, { useState } from "react";
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
// "The access token expired"
import styles from "./PlayerControl.module.css";
function PlayerControl(props) {
  const [{ token, playerState }, dispatch] = useStateProvider();
  const [repeatCount, setRepeatMode] = useState(0);

  const transferPlay = async () => {
    await axios
      .put(
        "https://api.spotify.com/v1/me/player",
        {
          device_ids: ["22d5861d9a6400757b76b63f361f93309ac249c0"],
        },
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => {
        let errText = err.response.data.error;
        let bodyMassage = "";
        if (errText.message === "The access token expired") {
          //   bodyMassage =
          //     "Without login you not able to access content, please login first!";
          // } else {
          bodyMassage = "Your tocken is expire please do Re-login";
          dispatch({
            type: reducerCases.SET_ERROR,
            title: errText.message,
            message: bodyMassage,
          });
        } else if (errText.reason === "PREMIUM_REQUIRED") {
          dispatch({
            type: reducerCases.SET_ERROR,
            title: errText.reason,
            message: errText.message,
          });
        }
      });
  };

  const changeTrack = async (type) => {
   
    transferPlay();
    await axios
      .post(
        `https://api.spotify.com/v1/me/player/${type}`,
        {},
        {
          devices: [
            {
              id: "22d5861d9a6400757b76b63f361f93309ac249c0",
              is_active: true,
              is_private_session: false,
              is_restricted: false,
              name: "Web Player (Chrome)",
              type: "Computer speaker",
              volume_percent: 6,
            },
          ],
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => {
       
        let errText = err.response.data.error;
        let bodyMassage = "";
        if (errText.message === "The access token expired") {
          //   bodyMassage =
          //     "Without login you not able to access content, please login first!";
          // } else {
          bodyMassage = "Your tocken is expire please do Re-login";
          dispatch({
            type: reducerCases.SET_ERROR,
            title: errText.message,
            message: bodyMassage,
          });
        } else if (errText.reason === "PREMIUM_REQUIRED") {
          dispatch({
            type: reducerCases.SET_ERROR,
            title: errText.reason,
            message: errText.message,
          });
        }
      });
    const response = await axios
      .get("https://api.spotify.com/v1/me/player/currently-playing", {
        devices: [
          {
            id: "22d5861d9a6400757b76b63f361f93309ac249c0",
            is_active: true,
            is_private_session: true,
            is_restricted: true,
            name: "Web Player (Chrome) Speaker",
            type: "Computer",
            volume_percent: 6,
          },
        ],
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .catch((err) => {
       
        let errText = err.response.data.error;
        let bodyMassage = "";
        if (errText.message === "The access token expired") {
          //   bodyMassage =
          //     "Without login you not able to access content, please login first!";
          // } else {
          bodyMassage = "Your tocken is expire please do Re-login";
          dispatch({
            type: reducerCases.SET_ERROR,
            title: errText.message,
            message: bodyMassage,
          });
        } else if (errText.reason === "PREMIUM_REQUIRED") {
          dispatch({
            type: reducerCases.SET_ERROR,
            title: errText.reason,
            message: errText.message,
          });
        }
      });
    if (response) {
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
    transferPlay();
    let response = await axios
      .put(
        `https://api.spotify.com/v1/me/player/${state}`,
        {},
        {
          params: {
            device_id: "22d5861d9a6400757b76b63f361f93309ac249c0",
          },
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => {
        let errText = err.response.data.error;
        let bodyMassage = "";
        if (errText.message === "The access token expired") {
          //   bodyMassage =
          //     "Without login you not able to access content, please login first!";
          // } else {
          bodyMassage = "Your tocken is expire please do Re-login";
          dispatch({
            type: reducerCases.SET_ERROR,
            title: errText.message,
            message: bodyMassage,
          });
        } else if (errText.reason === "PREMIUM_REQUIRED") {
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

  const repeatMode = async () => {
    let repeat =
      repeatCount % 3 === 0
        ? "off"
        : repeatCount % 3 == 1
        ? "context"
        : "track";
    let response = await axios
      .put(
        "https://api.spotify.com/v1/me/player/repeat",
        {},
        {
          params: {
            state: repeat,
          },
          devices: [
            {
              id: "22d5861d9a6400757b76b63f361f93309ac249c0",
              is_active: true,
              is_private_session: false,
              is_restricted: false,
              name: "Web Player (Chrome)",
              type: "Computer",
              volume_percent: 6,
            },
          ],
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => {
        let errText = err.response.data.error;
        let bodyMassage = "";
        if (errText.message === "The access token expired") {
          //   bodyMassage =
          //     "Without login you not able to access content, please login first!";
          // } else {
          bodyMassage = "Your tocken is expire please do Re-login";
          dispatch({
            type: reducerCases.SET_ERROR,
            title: errText.message,
            message: bodyMassage,
          });
        } else if (errText.reason === "PREMIUM_REQUIRED") {
          dispatch({
            type: reducerCases.SET_ERROR,
            title: errText.reason,
            message: errText.message,
          });
        }
      });
    setRepeatMode(repeatCount + 1);
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
        <FiRepeat
          onClick={repeatMode}
          style={{ color: repeatCount % 3 > 0 ? "green" : "grey" }}
        />
      </div>
    </div>
  );
}

export default PlayerControl;
