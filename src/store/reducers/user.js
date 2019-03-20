import { SET_USER } from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  currentUser: null
};

export default function userReducer(state = initialState, actions) {
  switch (actions.type) {
    case SET_USER: {
      return {
        ...state,
        isLoading: false,
        currentUser: actions.payload.currentUser
      };
    }

    default: {
      return { ...state };
    }
  }
}
