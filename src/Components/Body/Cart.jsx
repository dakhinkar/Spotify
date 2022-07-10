import React from "react";
import styles from "./Cart.module.css";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constant";
function Cart({ image, title, id }) {
  const [{ token, selectedPlaylistId }, dispatch] = useStateProvider();
  const url =
    image == undefined
      ? "https://cdn.pixabay.com/photo/2016/09/10/11/11/musician-1658887_960_720.jpg"
      : image.url;


      const ablumSelected = (id) =>{
        dispatch({type:reducerCases.SET_SELECTED_PLAYLIST_ID, selectedPlaylistId: id})
      }
    
      console.log(selectedPlaylistId);
  return (
    <div className={styles.card} onClick={()=> ablumSelected(id)}>
      <div className={styles.img_details}>
        <img src={url} alt="album-image" />
      </div>
      <div className={styles.album_title}>
        <h5>{title}</h5>
      </div>
    </div>
  );
}

export default Cart;
