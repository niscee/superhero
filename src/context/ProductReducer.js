export default (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "SEARCH_USERS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
