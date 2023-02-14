import React from "react";
import "./App.css";
import { HeaderDisplay } from "./views/header";
import { MainLinkDisplay } from "./views/body/body";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./AppActions";
import { LINKS } from "./mock/links";

const _App = ({ link10 }) => {
  const jack = () => LINKS.map((link) => link10({ payload: { link } }));

  return (
    <div className={"App"}>
      <HeaderDisplay />
      <button onClick={() => jack()}>Link To State</button>
      <MainLinkDisplay />
    </div>
  );
};

const App = connect(mapStateToProps, mapDispatchToProps)(_App);

export default App;
