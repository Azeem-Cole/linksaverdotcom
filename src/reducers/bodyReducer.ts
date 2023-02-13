const bodyReducer = function (state = 0, action: { type: any }) {
  switch (action.type) {
    case "add":
      return state + 1;

    case "sub":
      return state - 1;
    case "multiply":
      return state * 2;

    default:
      return state;
  }
};

export default bodyReducer;
