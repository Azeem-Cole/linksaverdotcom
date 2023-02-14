export const mapDispatchToProps = (
  dispatch: (item: { type: string; payload: {} }) => any
) => {
  return {
    link10: (item: any) => dispatch({ type: "link10", payload: item.payload }),
  };
};

export const mapStateToProps = (state: any) => {
  return {
    state: {},
  };
};
