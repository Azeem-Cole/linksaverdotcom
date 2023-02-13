export const mapDispatchToProps = (
  dispatch: (item: { type: string; payload:{} }) => any
) => {
  return {
    add10: () => dispatch({ type: "add10", payload: {} }),
    sub10: () => dispatch({ type: "sub10", payload: {} }),
    div10: () => dispatch({ type: "div10", payload: {} }),
  };
};

export const mapStateToProps = (state: any) => {
  return {
    state,
  };
};
