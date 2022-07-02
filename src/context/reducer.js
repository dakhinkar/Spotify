import { reduerCases } from "./Constant";

export const initialState = {
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reduerCases.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
