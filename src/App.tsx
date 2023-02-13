import React from "react";
import "./App.css";
import { HeaderDisplay } from "./views/header";
import { MainLinkDisplay } from "./views/body/body";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./AppActions";

const _App = ({ aa, bb, cc, newcount }) => {
  const counter = newcount["newappReducer"];
  const counter2 = newcount["newbodyReducer"];

  return (
    <div className={"App"}>
      <HeaderDisplay />
      <p onClick={aa}>1+</p>
      <p onClick={bb}>1-</p>
      <p onClick={cc}>1x</p>
      <p>{counter}{counter2}</p>
      <MainLinkDisplay />
    </div>
  );
};

const App = connect(mapStateToProps, mapDispatchToProps)(_App);

export default App;
