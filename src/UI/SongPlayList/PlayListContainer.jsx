
import React from 'react';

function PlayListContainer({name}) {
    const styles = {
        playList: {
                padding: "12px",
                marginTop: "9vh",
                height: "auto",
                backgroundColor: "#bdc3c7",
                paddingLeft: "20vw",
                paddingBottom: "16vh",
                overflow: "auto",
                minHeight: "84vh",
        }   
    }
    console.log(name);
    return (
        <div style={styles.playList}>
            {name}
        </div>

    );
}

export default PlayListContainer;