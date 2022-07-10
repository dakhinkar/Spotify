import { reducerCases } from "./Constant";

export const initialState = {
    token : null,
    playlists: [],
    userInfo: {},
    selectedPlaylistId: null,
    selectedPlaylist: null,
    currentlyPlaying : null,
    playerState : false,
    isSearching: false,
    headerBg:false,
    navBg: false,
}
const reducer = (state, action) =>{
    switch(action.type){
        case reducerCases.SET_TOKEN:
            return{
                ...state,
                token : action.token
            }

        case reducerCases.SET_PLAYLISTS: {
            return {
                ...state,
                playlists : action.playlists,
            }
        }
        case reducerCases.SET_USERINFO:{
            return{
                ...state,
                userInfo: action.userInfo,
            }
        }
        case reducerCases.SET_PLAYLIST: {
            return {
                ...state,
                selectedPlaylist : action.selectedPlaylist,
            }
        }
        case reducerCases.SET_PLAYING: {
            return {
                ...state,
                currentlyPlaying : action.currentlyPlaying,
            }
        }
        case reducerCases.SET_PLAYER_STATE: {
            return {
                ...state,
                playerState : action.playerState,
            }
        }
        case reducerCases.SET_SELECTED_PLAYLIST_ID: {
            return {
                ...state,
                selectedPlaylistId : action.selectedPlaylistId,
            }
        }
        case reducerCases.SET_SEARCH_CLICK: {
            return {
                ...state,
                isSearching : action.isSearching,
            }
        }
        case reducerCases.SET_NAV_BG: {
            return {
                ...state,
                navBg : action.navBg,
            }
        }
        case reducerCases.SET_HEADER_BG: {
            return {
                ...state,
                headerBg : action.headerBg,
            }
        }
        default:
            return state;
    }

};
export default reducer;
