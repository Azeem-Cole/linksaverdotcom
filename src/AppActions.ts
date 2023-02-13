export const mapDispatchToProps = (
  dispatch: (arg0: { type: string }) => any
) => {
  return {
    add10: () => dispatch({ type: "add10" }),
    sub10: () => dispatch({ type: "sub10" }),
    div10: () => dispatch({ type: "div10" }),
  };
};

export const mapStateToProps = (state: any) => {
  return {
    newcount: state,
  };
};
