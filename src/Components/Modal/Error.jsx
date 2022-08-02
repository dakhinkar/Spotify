import React from "react";
import style from "./Error.module.css";
import { reducerCases } from "../../utils/Constant";
import { useStateProvider } from "../../utils/StateProvider";
const Error = () => {
  const [{error, token}, dispatch] = useStateProvider();

  const closeHandler = () =>{
    if(error.title === 'Token expire'){
      dispatch({type: reducerCases.SET_TOKEN, token: null})
    }
    
    dispatch({type: reducerCases.SET_ERROR, title: null, message: null});
   
  }
  const croseHandler = () =>{
    dispatch({type: reducerCases.SET_ERROR, title: null, message: null});
  }

  return (
    <div className={style.error_container}>
      <div className={style.error_title}>
        <h1 >{error.title}</h1>
        <button onClick={croseHandler}>X</button>
      </div>

      <p className={style.error_message}>{error.message}</p>
      <div className={style.error_footer}>
        
        <button onClick={closeHandler}>CLOSE</button>
      </div>
    </div>
  );
};

export default Error;
