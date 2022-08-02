
import React, {useEffect} from 'react';
import Spotify from './Components/Spotify';
import {useStateProvider} from './utils/StateProvider';
import {reducerCases} from "./utils/Constant";
import Login from './Components/NavBar/Login';

function App(props) {
  return (
    <div>
      <Spotify/>
    </div>
  );
}

export default App;