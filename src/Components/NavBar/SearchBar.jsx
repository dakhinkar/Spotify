import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./NavBar.module.css";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
function SearchBar(props) {
  const [{ token, isSearching }, dispatch] = useStateProvider();
  const serachData = async (e) => {
    const search = e.target.value;
    const response = await axios.get(
      "	https://api.spotify.com/v1/search",
      {
        params: {
          q: { search },
          type: ["track","artist","album"],
          offset: 5,
        },
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  };
  return (
    <div
      className={styles.search_bar}
      style={{ visibility: isSearching ? "visible" : "hidden" }}
    >
      <FaSearch />
      <input type="text" placeholder="Artist, Songs, or podcasts"  onChange={(e)=> serachData(e)}/>
    </div>
  );
}

export default SearchBar;
