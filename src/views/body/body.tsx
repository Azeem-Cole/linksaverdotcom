import React from "react";
import { LINKS } from "../../mock/links";
import { Catergorizer } from "../../sharedComponent/catogoryMaker";
import { Folder } from "../../sharedComponent/folders";
import { LinkDisplay } from "../../sharedComponent/link/LinkDisplay";
import { connect, useDispatch } from "react-redux";
import "./Body.css";

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({ type: "add" }),
    sub: () => dispatch({ type: "sub" }),
  };
};

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const _MainLinkDisplay = ({ count, add, sub }) => {
  return (
    <div>
      <div>
        <p onClick={add}>+</p>
        <p onClick={sub}>-</p>
        <p>{count}</p>
        <form className="AddLinkForm">
          <input type="text" placeholder="Paste Your Link Here"></input>
          <input type="text" placeholder="(Optional) Name Your Link"></input>
          <input
            className="SubmitButton"
            type="submit"
            value="Add New Link"
          ></input>
        </form>
      </div>

      <div>
        <hr className="HorizontalRule"></hr>
        <Catergorizer linkList={LINKS} />
      </div>

      <div>
        <hr className="HorizontalRule"></hr>
        <Folder />
      </div>

      <div>
        <hr className="HorizontalRule"></hr>
        <LinkDisplay linkList={LINKS} />
      </div>
    </div>
  );
};

export const MainLinkDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MainLinkDisplay);
