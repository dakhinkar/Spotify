import React from "react";
import styles from './Spotify.module.css';
import Sidebar from "./Sidebar/Sidebar";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";

function Spotify(props) {
  return (
    <div className={styles.container}>
        <div className={styles.spotify_body}>
            <Sidebar/>
            <div className={styles.body}>
                <NavBar />
                <div className="body_contents">
                    <Body />
                </div>
            </div>
        </div>  
        <div className="spotify_footer">
            <Footer/>
        </div>
    </div>
  );
}

export default Spotify;
