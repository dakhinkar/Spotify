import React from "react";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import styles from "./Volume.module.css";
import { MdVolumeMute, MdVolumeUp } from "react-icons/md";
import { reducerCases } from "../../utils/Constant";
import { useState } from "react";

function Volume(props) {
  const [volumeValue, setVolumes] = useState(20);
  const [{ token },dispatch] = useStateProvider();
  const setVolume = async (e) => {
    var volume = parseInt(e.target.value);
    await axios
      .put(
        `https://api.spotify.com/v1/me/player/volume/`,
        {},
        {
          params: {
            volume_percent: volume,
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
    setVolumes(volume);
  };
  return (
    <div className={styles.container}>
      {volumeValue <= 1 ? <MdVolumeMute /> : <MdVolumeUp />}
      <input
        type="range"
        title={volumeValue}
        min={0}
        max={100}
        onChange={(e) => setVolume(e)}
      />
    </div>
  );
}

export default Volume;
