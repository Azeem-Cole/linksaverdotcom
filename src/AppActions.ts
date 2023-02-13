export const mapDispatchToProps = (
  dispatch: (arg0: { type: string }) => any
) => {
  return {
    aa: () => dispatch({ type: "a" }),
    bb: () => dispatch({ type: "b" }),
    cc: () => dispatch({ type: "c" }),
  };
};

export const mapStateToProps = (state: any) => {
  return {
    newcount: state,
  };
};
