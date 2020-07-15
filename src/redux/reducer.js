const initialState = {
  isLoading: null,
  errorMessage: null,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "loginUser":
      return {
        ...state,
        user: action.user,
      };
    case "logout":
        return {
          ...state,
          user: null,
        };
    default:
      return state;
  }
};
export default reducer;
