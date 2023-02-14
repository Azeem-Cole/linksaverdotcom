const initialUserState = {
  arr: [] as any,
};

const appReducer = function (
  state = initialUserState,
  action: { type: any; payload: { color: string; number: number } }
) {
  console.log(action);

  switch (action.type) {
    case "link10":
      return { ...state, arr: [...state.arr, action.payload] };

    default:
      return state;
  }
};

export { appReducer };
