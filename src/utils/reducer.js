import { reducerCases } from "./Constant";
const defaultPlaylist = [
  {
    id: "7m6QOwm8XLNgujPOUAcBru",
    image: {
      height: 300,
      url: "https://mosaic.scdn.co/300/ab67616d0000b27306d64d58af4f4ef39f052eabab67616d0000b273242776c48d24addd6d6f234dab67616d0000b273c8f5f088c4436d355a79939bab67616d0000b273d30930b252f905ad735dd484",
      width: 300,
    },
    name: "Barsaat Ka Mausam",
  },
  {
    id: "1rE5NQIylVkUGwA0zZ5ZgE",
    image: undefined,
    name: 'Kaise Hua (From "Kabir Singh")',
  },
  {
    id: "7gPPAFw2OP7MEF3wpJvSSQ",
    image: undefined,
    name: "Kaadhal En Kaviye (From 'Salmon 3D')",
  },
  {
    id: "6nuJg6vdIVF14ukwAC2P2h",
    image: undefined,
    name: "Uyir Urugudhey",
  },
  {
    id: "1pa0hKsbuB1mzVJz7fSwpM",
    image: undefined,
    name: "Hounds Of Love",
  },
  {
    id: "0EMpwLatA1afNQj4k5rt3f",
    image: undefined,
    name: 'Galliyan Returns (From "Ek Villain Returns")',
  },
  {
    id: "5xwaRzbf8B79YehZIfha0e",
    image: undefined,
    name: "Barsaat Ka Mausam",
  },
  {
    id: "64jHM4Vn74StXVfl2h9o41",
    image: {
      height: 300,
      url: "https://mosaic.scdn.co/300/ab67616d0000b273095191f6b96fd9eff585befcab67616d0000b2737b93fd8b0ade33ceb9d536deab67616d0000b2738c72151621d5c60ed768d010ab67616d0000b273ce1f4349305971b5beb75fcd",
      width: 300,
    },
    name: 'Kaise Hua (From "Kabir Singh")',
  },
  {
    id: "3F6aWQpAHzfA82Xl92u0qa",
    image: undefined,
    name: 'Kitni Haseen Hogi (From "Hit - The First Case")',
  },
  ,
  {
    id: "6zYn06cT9og9i12gnKn4GS",
    image: undefined,
    name: 'Rangisari (From "Jugjugg Jeeyo")',
  },
  {
    id: "37i9dQZF1DX0XUfTFmNBRM",
    image: undefined,
    name: "Hot Hits Hindi",
  },
  {
    id: "7LzsjCP0GV3ve5ckZSSTPO",
    image: {
      height: 300,
      url: "https://mosaic.scdn.co/300/ab67616d0000b27310329b55fb062f523c2c61feab67616d0000b2733361905e288acb907f181f6aab67616d0000b2737569cbe3695608074d9fd389ab67616d0000b273eaa6b4bfb5954ee5a5a8ce9e",
      width: 300,
    },
    name: "My Playlist #2",
  },
];
export const initialState = {
  token: null,
  playlists: defaultPlaylist,
  userInfo: {},
  selectedPlaylistId: null,
  selectedPlaylist: null,
  currentlyPlaying: {
    artists: ["Antara Mitra"],
    id: "5uAXBZkq4feZVKQnNsZV1a",
    image: "https://i.scdn.co/image/ab67616d000048514c5330a9339d374e0af4d083",
    name: "Sokhi Bhabona Kahare Bole",
  },
  playerState: false,
  isSearching: false,
  headerBg: false,
  navBg: false,
  volume: 20,
  error: { title: null, message: null },
};
const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case reducerCases.SET_PLAYLISTS: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case reducerCases.SET_USERINFO: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    case reducerCases.SET_PLAYLIST: {
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    }
    case reducerCases.SET_PLAYING: {
      return {
        ...state,
        currentlyPlaying: action.currentlyPlaying,
      };
    }
    case reducerCases.SET_PLAYER_STATE: {
      return {
        ...state,
        playerState: action.playerState,
      };
    }
    case reducerCases.SET_SELECTED_PLAYLIST_ID: {
      return {
        ...state,
        selectedPlaylistId: action.selectedPlaylistId,
      };
    }
    case reducerCases.SET_SEARCH_CLICK: {
      return {
        ...state,
        isSearching: action.isSearching,
      };
    }
    case reducerCases.SET_NAV_BG: {
      return {
        ...state,
        navBg: action.navBg,
      };
    }
    case reducerCases.SET_HEADER_BG: {
      return {
        ...state,
        headerBg: action.headerBg,
      };
    }
    case reducerCases.SET_VOLUME_STATE: {
      return {
        ...state,
        isMute: action.isMute,
      };
    }
    case reducerCases.SET_ERROR: {
      return {
        ...state,
        error: { title: action.title, message: action.message },
      };
    }
    default:
      return state;
  }
};
export default reducer;
