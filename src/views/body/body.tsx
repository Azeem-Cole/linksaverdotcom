import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../actions/bodyAction";
import "./Body.css";

const _MainLinkDisplay = ({ count, add, sub, mul }) => {
  const counter = count["bodyReducer"];

  return (
    <div>
      <div>
        <p onClick={add}>+</p>
        <p onClick={sub}>-</p>
        <p onClick={mul}>x</p>
        <p>{counter}</p>
      </div>
    </div>
  );
};

export const MainLinkDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MainLinkDisplay);
