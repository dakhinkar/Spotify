import React, { useEffect } from "react";
import axios from "axios";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constant";
import styles from "./PlayList.module.css";
function PlayList(props) {
  const [{ token, playlists, selectedPlaylistId }, dispatch] =
    useStateProvider();

  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios
        .get("https://api.spotify.com/v1/me/playlists", {
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
          } else {
            bodyMassage =
              "Without login you not able to access content, please login first!";
            dispatch({
              type: reducerCases.SET_ERROR,
              title: errText.message,
              message: bodyMassage,
            });
          }
        });
      if (response) {
        const { items } = response.data;
        const playlists = items.map(({ name, id, images }) => {
          return { name, id, image: images[1] };
        });
        console.log(playlists);
        dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
      }
    };
    getPlaylistData();
  }, [token, dispatch]);

  const ablumSelected = (id) => {
    dispatch({
      type: reducerCases.SET_SELECTED_PLAYLIST_ID,
      selectedPlaylistId: id,
    });
  };
  return (
    <div className={styles.container}>
      <ul>
        {playlists.map(({ name, id }) => {
          return (
            <li key={id} onClick={() => ablumSelected(id)}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PlayList;
