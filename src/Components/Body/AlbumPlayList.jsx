import React, { useEffect } from "react";
import styled from "styled-components";
import { AiFillClockCircle } from "react-icons/ai";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../../utils/Constant";
import AlbumHeader from "./AlbumHeader";
import PlayListHeader from "./PlayListHeader";
import PlayListDetails from "./PlayListDetails";
function AlbumPlayList(props) {
  const [
    {
      token,
      selectedPlaylistId,
      selectedPlaylist,
      playerState,
      currentlyPlaying,
    },
    dispatch,
  ] = useStateProvider();

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios
        .get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`, {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        })
        .catch((err) => {
          dispatch({
            type: reducerCases.SET_SELECTED_PLAYLIST_ID,
            selectedPlaylistId: null,
          });
          let errText = err.response.data.error;
          let bodyMassage = "";
          if (errText.message === "Invalid access token") {
            bodyMassage =
              "Without login you not able to access content, please login first!";
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
            bodyMassage = "Your tocken is expire please do Re-login";
            dispatch({
              type: reducerCases.SET_ERROR,
              title: errText.message,
              message: bodyMassage,
            });
          }
        });
      // console.log("response" + response);
      // console.log(response.data);
      if (response) {
        const selectedPlaylist = {
          id: response.data.id,
          name: response.data.name,
          description: response.data.description.startsWith("<a")
            ? ""
            : response.data.description,
          image: response.data.images[0].url,
          tracks: response.data.tracks.items.map(({ track }) => ({
            id: track.id,
            name: track.name,
            artists: track.artists.map(({ name }) => name),
            image: track.album.images[2].url,
            duration: track.duration_ms,
            album: track.album.name,
            context_uri: track.album.uri,
            track_number: track.track_number,
          })),
        };

        dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
      }
    };
    getInitialPlaylist();
  }, [token, selectedPlaylistId, dispatch]);

  return (
    <div className="container" style={{ width: "100%" }}>
      {selectedPlaylist && (
        <>
          <AlbumHeader />
          <PlayListHeader />
          <PlayListDetails />
        </>
      )}
    </div>
  );
}

export default AlbumPlayList;
