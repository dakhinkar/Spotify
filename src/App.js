
import React, {useEffect} from 'react';
import Spotify from './Components/Spotify';
import {useStateProvider} from './utils/StateProvider';
import reducerCases from "./utils/reducer";
function App(props) {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
      const hash = window.location.hash;
      if (hash) {
        const token = hash.substring(1).split("&")[0].split("=")[1];
  
        dispatch({ type: reducerCases.SET_TOKEN, token });
        // console.log(token);
      }
    }, [token, dispatch]);
  
  return (
    <div>
      <Spotify/>
    </div>
  );
}

export default App;