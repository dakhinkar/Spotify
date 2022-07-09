import React from "react";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constant";
import axios from "axios";
import Cart from "./Cart";
import styles from "./Cart.module.css";

function Body(props) {
  const [{ token, playlists }, dispatch] = useStateProvider();

  return (
    <div className={styles.container}>
        {
            playlists.map(({id, name, image }) => {
                return <Cart key={id} title={name} image={image}  />
            })
        }   
    </div>
  );
}

export default Body;
