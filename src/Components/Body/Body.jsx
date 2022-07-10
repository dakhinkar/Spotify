import React from "react";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constant";
import axios from "axios";
import Cart from "./Cart";
import styles from "./Cart.module.css";
import AlbumPlayList from "./AlbumPlayList";

function Body() {
  const [{ token, playlists, selectedPlaylistId }, dispatch] = useStateProvider();


  return (
    <div className={styles.container}>
        {
           selectedPlaylistId === null ? ( playlists.map(({id, name, image }) => {
                return <Cart key={id} title={name} image={image} id={id}  />
            })): (<AlbumPlayList/>)
        }   
       
    </div>
  );
}

export default Body;
