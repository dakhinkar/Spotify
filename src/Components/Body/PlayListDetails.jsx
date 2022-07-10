import React from "react";
import { useStateProvider } from "../../utils/StateProvider";
import TrackDetails from "./TrackDetails";
import styles from "./TrackDetails.module.css";
function PlayListDetails(props) {
  const [{ token, selectedPlaylist }, dispatch] = useStateProvider();
  return (
    <div className={styles.tracks}>
      {selectedPlaylist.tracks.map((data, index) => {
        return <TrackDetails key={data.id} data={data} index={index} />;
      })}
    </div>
  );
}

export default PlayListDetails;
