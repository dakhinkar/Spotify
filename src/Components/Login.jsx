import React from "react";
import PlayListContainer from "../UI/SongPlayList/PlayListContainer";
function Login(props) {
  const styles = {
    container: {
      padding: "12px",
      marginTop: "9vh",
      height: "auto",
      backgroundColor: "#bdc3c7",
      paddingLeft: "20vw",
      paddingBottom: "16vh",
      overflow: "auto",
      minHeight: "84vh",
      textAlign: "center",
    },
    input: {
      margin: "10px",
      borderRadius: "5px",
      outline: "none",
    },
    button: {
      padding: "10px",
      backgroundColor: "blue",
      color: "white",
      width: "120px",
      fontSize: "25px",
      fontWeight: "bold",
      borderRadius: "20px",
      cursor: "pointer",
    },
  };
  const handleClick = () => {
    const clientId = "a648116ea0cf4b89995fbcc0055eea73";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scopes = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
        " ")}&response_type=token&show_daialog=true`;
  };
  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <input type="text" placeholder="User name" style={styles.input} />
      <br />
      <input type="password" placeholder="Password" style={styles.input} />
      <br />
      <button onClick={handleClick} style={styles.button}>
        Login
      </button>
    </div>
  );
}

export default Login;
