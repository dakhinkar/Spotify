import React from 'react';
import styles from "./TrackDetails.module.css";
function TrackDetails({data, index}) {
    
    const msToMinAndSec = (ms) => {
        const min = Math.floor(ms / 60000);
        const sec = ((ms % 60000) / 1000).toFixed(0);
        return min + ":" + (sec < 10 ? "0" : "") + sec;
      };
    return (
        // <div>Track details</div>
        <div className={styles.row}>
              <div className={styles.col}>
                      <span>{index + 1}</span>
                    </div>
                    <div className={styles.col + " " + styles.details}>
                      <div className={styles.image}>
                        <img src={data.image} alt="track" />
                      </div>
                      <div className={styles.info}>
                        <span className={styles.name}>{data.name}</span>
                        <span>{data.artists}</span>
                      </div>
                    </div>
                    <div className={styles.col}>
                      <span>{data.album}</span>
                    </div>
                    <div className={styles.col}>
                      <span>{msToMinAndSec(data.duration)}</span>
                    </div>
            
        </div>
    );
}

export default TrackDetails;