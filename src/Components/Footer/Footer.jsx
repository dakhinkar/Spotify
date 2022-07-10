
import React from 'react';
import CurrentTrack from './CurrentTrack';
import styles from './Footer.module.css';
import PlayerControl from './PlayerControl';
import Volume from './Volume';
function Footer(props) {
    return (
        <div className={styles.container}>
           <CurrentTrack/>
           <PlayerControl/>
           <Volume/>
        </div>
    );
}

export default Footer;