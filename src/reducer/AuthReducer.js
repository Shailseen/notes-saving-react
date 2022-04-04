export const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOG_IN":
        return { ...state, token: action.payload };
      default:
        return state;
    }
  };
  