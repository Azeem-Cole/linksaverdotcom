import React from "react";
import "./App.css";
import { HeaderDisplay } from "./views/header";
import { MainLinkDisplay } from "./views/body/body";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./AppActions";

const _App = ({ add10, sub10, div10, state }) => {
  const counter = state["newappReducer"];

  // const dispatch = useDispatch();

  // for (let index = 0; index < LINKS.length; index++) {
  //   const element = LINKS[index];
  //   console.log(element);

  //   dispatch(add10);
  // }

  return (
    <div className={"App"}>
      <HeaderDisplay />
      <p onClick={add10}>+10</p>
      <p onClick={() => sub10({ type: "sub10", payload: { color: "red" } })}>-10</p>
      <p onClick={div10}>/10</p>
      <p>{counter}</p>
      <MainLinkDisplay />
    </div>
  );
};

const App = connect(mapStateToProps, mapDispatchToProps)(_App);

export default App;
