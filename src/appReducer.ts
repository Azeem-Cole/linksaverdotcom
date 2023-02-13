const appReducer = function (
  state = 0,
  action: { type: any; payload: { color: string } }
) {
  switch (action.type) {
    case "add10":
      console.log(action);
      console.log(action.payload);
      return state + 10;

    case "sub10":
      return state - 10;
    case "div10":
      return state / 10;

    default:
      return state;
  }
};

export { appReducer };
