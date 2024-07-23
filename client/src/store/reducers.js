const initialState = {
  data: [],
};

export const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STOCK_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
