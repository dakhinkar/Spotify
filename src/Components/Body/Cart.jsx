import React from "react";
import styles from "./Cart.module.css";
function Cart({ image, title }) {
  console.log(image);
  const url =
    image == undefined
      ? "https://cdn.pixabay.com/photo/2016/09/10/11/11/musician-1658887_960_720.jpg"
      : image.url;
  return (
    <div className={styles.card}>
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
