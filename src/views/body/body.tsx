import React from "react";
import "./Body.css";

import { connect } from "react-redux";

export const mapStateToProps = (state: any) => {
  return {
    state,
  };
};

const _MainLinkDisplay = ({ state }) => {
  const counter = state["links"];

  return (
    <div>
      <div>hey</div>
    </div>
  );
};

export const MainLinkDisplay = connect(mapStateToProps)(_MainLinkDisplay);
