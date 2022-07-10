import React from "react";
import { reducerCases } from "../../utils/Constant";
import { useStateProvider } from "../../utils/StateProvider";
import styles from "./TrackDetails.module.css";
import axios from "axios";

function TrackDetails({ data, index }) {
  const [{token, currentlyPlaying, playerState}, dispatch] = useStateProvider();
  const msToMinAndSec = (ms) => {
    const min = Math.floor(ms / 60000);
    const sec = ((ms % 60000) / 1000).toFixed(0);
    return min + ":" + (sec < 10 ? "0" : "") + sec;
  };
  const selectTrack = async (
    id,
    name,
    artists,
    image,
    context_uri,
    track_number
  ) => {
    const response = await axios.put(
      `https://api.spotify.com/v1/me/player/play`,
      {
        context_uri: context_uri,
        offset: {
          position: track_number - 1,
        },
        position_ms: 0,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 204) {
      const currentlyPlaying = {
        id: id,
        name: name,
        artists: artists.map((artist) => artist.name),
        image: image,
      };
      console.log(currentlyPlaying);
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    }
  };
  return (
    <div
      className={styles.row}
      onClick={() =>
        selectTrack(
          data.id,
          data.name,
          data.artists,
          data.image,
          data.context_uri,
          data.track_number
        )
      }
    >
      <div className={styles.col}>
        <span>{index + 1}</span>
      </div>
      <div className={styles.col + " " + styles.details}>
        <div className={styles.image}>
          <img src={data.image} alt="track" />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>{data.name}</span>
          <span>{data.artists}</span>
        </div>
      </div>
      <div className={styles.col}>
        <span>{data.album}</span>
      </div>
      <div className={styles.col}>
        <span>{msToMinAndSec(data.duration)}</span>
      </div>
    </div>
  );
}

export default TrackDetails;
