export const mapDispatchToProps = (
  dispatch: (item: {type: string, payload: {}}) => any
) => {
  // console.log({ item })
  return {
    add10: () => dispatch({ type: "add10", payload: {} }),
    sub10: (item: any) => dispatch({ type: "sub10", payload: item.payload }),
    div10: () => dispatch({ type: "div10", payload: {} }),
  };
};

export const mapStateToProps = (state: any) => {
  return {
    state,
  };
};
