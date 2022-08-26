import React, { useRef, useEffect } from "react";
import styles from "./Spotify.module.css";
import Sidebar from "./Sidebar/Sidebar";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import Error from "./Modal/Error";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constant";
import axios from "axios";

function Spotify(props) {
  const bodyRef = useRef();
  const [{ token, error, headerBg, navBg }, dispatch] = useStateProvider();

  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? dispatch({ type: reducerCases.SET_NAV_BG, navBg: true })
      : dispatch({ type: reducerCases.SET_NAV_BG, navBg: false });
    bodyRef.current.scrollTop >= 268
      ? dispatch({ type: reducerCases.SET_HEADER_BG, headerBg: true })
      : dispatch({ type: reducerCases.SET_HEADER_BG, headerBg: false });
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await axios
        .get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        })
        .catch((err) => {
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
      if (response) {
        const userInfo = {
          userId: response.data.id,
          userName: response.data.display_name,
        };
        dispatch({ type: reducerCases.SET_USERINFO, userInfo });
      }
    };
    getUserInfo();
  }, [token, dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.spotify_body}>
        <Sidebar />
        <div className={styles.body}>
          <NavBar />
          <div className={styles.body_contents} ref={bodyRef} onScroll={bodyScrolled}>
            {error.title && <Error />}
            <Body />
          </div>
        </div>
      </div>
      <div className={styles.spotifyFooter}>
        <Footer />
      </div>
    </div>
  );
}

export default Spotify;



