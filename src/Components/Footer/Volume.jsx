
import React from 'react';
import { useStateProvider } from '../../utils/StateProvider';
import axios from 'axios';
import styles from "./Volume.module.css";
import {MdVolumeMute, MdVolumeUp} from 'react-icons/md';
import {reducerCases} from "../../utils/Constant";
import { useState } from 'react';


function Volume(props) {
    const [volumeValue , setVolumes] = useState(20);
   const [{token}] = useStateProvider();
    const setVolume = async (e) =>{
        var volume =  parseInt(e.target.value);
        await axios.put(
            `https://api.spotify.com/v1/me/player/volume/`,{},
            {
                params: {
                    volume_percent:volume,
                },
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
              },
            }
            
          ); 
          setVolumes(volume);
       
         
    };
    return (
        <div className={styles.container}>
            {
                volumeValue <= 1 ? <MdVolumeMute/> : <MdVolumeUp/>
            }
            <input type="range" title={volumeValue} min={0} max={100}  onChange={(e) => setVolume(e)}/>
        </div>
    );
}

export default Volume;
