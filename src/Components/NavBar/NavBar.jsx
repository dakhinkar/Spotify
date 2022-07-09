
import React, {useEffect} from 'react';

import Login from './Login';
import styles from './NavBar.module.css';
import SearchBar from './SearchBar';
import Avatar from "./Avatar";
import {useStateProvider} from '../../utils/StateProvider';
import reducerCases from "../../utils/reducer";
function NavBar(props) {
    const [{token, isSearching}, dispatch] = useStateProvider();
    return (
        <div className={styles.container}>
            < SearchBar/>
            {
                token ? <Avatar/> :<Login/>
            }
        </div>
    );
}



export default NavBar;