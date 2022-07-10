
import React from 'react';
import { useStateProvider } from '../../utils/StateProvider';
import axios from 'axios';
import styles from "./Volume.module.css";

function Volume(props) {
    const [{token}] = useStateProvider();
    const setVolume = async (e) =>{
        await axios.put(
            `https://api.spotify.com/v1/me/player/volume/`,{},
            {
                params: {
                    volume_percent: parseInt(e.target.value),
                },
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
              },
            }
            
          ); 
         
    };
    return (
        <div className={styles.container}>
            <input type="range" min={0} max={100} onChange={(e) => setVolume(e)}/>
        </div>
    );
}

export default Volume;
