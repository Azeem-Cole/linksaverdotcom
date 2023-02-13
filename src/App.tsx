import React from "react";
import "./App.css";
import { HeaderDisplay } from "./views/header";
import { MainLinkDisplay } from "./views/body/body";
import { connect, useDispatch } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./AppActions";
import { LINKS } from "./mock/links";

const _App = ({ add10, sub10, div10, state }) => {
  const counter = state["newappReducer"];
  const counter2 = state["newbodyReducer"];

  // const dispatch = useDispatch();

  // for (let index = 0; index < LINKS.length; index++) {
  //   const element = LINKS[index];
  //   console.log(element);

  //   dispatch(add10);
  // }

  return (
    <div className={"App"}>
      <HeaderDisplay />
      <p onClick={() => add10({color: "red"})}>+10</p>
      <p onClick={sub10}>-10</p>
      <p onClick={div10}>-/10</p>
      <p>
        {counter}
        {counter2}
      </p>
      <MainLinkDisplay />
    </div>
  );
};

const App = connect(mapStateToProps, mapDispatchToProps)(_App);

export default App;
