import React from "react";
import "./App.css";
import { HeaderDisplay } from "./views/header";
import { MainLinkDisplay } from "./views/body/body";

function App() {

  return (
    <div className={"App"}>
      <HeaderDisplay />
      <MainLinkDisplay />
    </div>
  );
}

export default App;
