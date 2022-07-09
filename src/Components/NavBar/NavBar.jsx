
import React, {useEffect} from 'react';

import Login from './Login';
import styles from './NavBar.module.css';
import SearchBar from './SearchBar';
import Avatar from "./Avatar";
import {useStateProvider} from '../../utils/StateProvider';
import {reducerCases} from "../../utils/Constant";
function NavBar(props) {
   
  const [{token}, dispatch] =  useStateProvider();

  useEffect(()=>{
    const hash = window.location.hash;
    if(hash){
      const token = hash.substring(1).split("&")[0].split("=")[1];
    
      dispatch({type:reducerCases.SET_TOKEN, token})
      // console.log(token);
    }
  },[token, dispatch])

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