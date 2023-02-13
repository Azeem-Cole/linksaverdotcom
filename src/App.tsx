import React from "react";
import "./App.css";
import { HeaderDisplay } from "./views/header";
import { MainLinkDisplay } from "./views/body/body";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./AppActions";

const _App = ({ add10, sub10, div10, newcount }) => {
  const counter = newcount["newappReducer"];
  const counter2 = newcount["newbodyReducer"];

  return (
    <div className={"App"}>
      <HeaderDisplay />
      <p onClick={add10}>+10</p>
      <p onClick={sub10}>-10</p>
      <p onClick={div10}>-/10</p>
      <p>{counter}{counter2}</p>
      <MainLinkDisplay />
    </div>
  );
};

const App = connect(mapStateToProps, mapDispatchToProps)(_App);

export default App;
