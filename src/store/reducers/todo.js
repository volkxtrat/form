const initialState = {};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PROJECT": {
      return {
        ...state
      };
    }

    default:
      return state;
  }
}
