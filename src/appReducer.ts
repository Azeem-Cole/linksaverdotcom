const appReducer = function (state = 0, action: { type: any }) {
  switch (action.type) {
    case "a":
      return state + 10;

    case "b":
      return state - 10;
    case "c":
      return state / 2;

    default:
      return state;
  }
};

export { appReducer };
