import React, { useRef, useEffect } from "react";
import styles from "./Spotify.module.css";
import Sidebar from "./Sidebar/Sidebar";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constant";
import axios from "axios";

function Spotify(props) {
  const bodyRef = useRef();
  const [{ token, headerBg, navBg }, dispatch] = useStateProvider();

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
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USERINFO, userInfo });
    };
    getUserInfo();
  }, [token, dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.spotify_body}>
        <Sidebar />
        <div className={styles.body} ref={bodyRef} onScroll={bodyScrolled}>
          <NavBar />
          <div className="body_contents">
            <Body />
          </div>
        </div>
      </div>
      <div className="spotify_footer">
        <Footer />
      </div>
    </div>
  );
}

export default Spotify;
