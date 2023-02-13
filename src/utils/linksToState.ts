import { LINKS } from "../mock/links";

export const mapDispatchToProps = (
  dispatch: (arg0: { type: string }) => any
) => {
  return {
    linkToState: () => dispatch({ type: "linkToState" }),
  };
};

export const mapStateToProps = (state: any) => {
  return {
    link: state,
  };
};

export const linkToStateAction = function (state: any, action: { type: any }) {
  switch (action.type) {
    case "linkToState":
      return (state = {
        hello: "hey",
        bye: "hu",
      });

    default:
      return state;
  }
};

export type linkToStateType = {
  type: string;
  payload: { hello: string; bye: string };
};

export const linkToState = (hello: "blie", bye: "red"): linkToStateType => {
  const payload = {
    hello: "blie",
    bye: "red",
  };
  LINKS.map((link) => {});
};
