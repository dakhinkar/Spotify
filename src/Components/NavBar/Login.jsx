import React, { useEffect } from "react";
import styles from "./NavBar.module.css";
import {reducerCases} from "../../utils/Constant";
import {useStateProvider} from "../../utils/StateProvider";

function Login(props) {
  const [{isLogin}, dispatch] = useStateProvider();
  
   
  const handleClick = () => {
    const clientId = "a648116ea0cf4b89995fbcc0055eea73";
    const redirectUrl = "https://my-spotify-01.netlify.app/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;

    
    
  };

  return (
    <div className={styles.user}>
       <button onClick={handleClick}>Login</button> 
    </div>
  );
}

export default Login;
