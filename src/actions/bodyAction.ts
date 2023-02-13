export const mapDispatchToProps = (
  dispatch: (arg0: { type: string }) => any
) => {
  return {
    add: () => dispatch({ type: "add" }),
    sub: () => dispatch({ type: "sub" }),
    mul: () => dispatch({ type: "multiply" }),
  };
};

export const mapStateToProps = (state: any) => {
  return {
    count: state,
  };
};
