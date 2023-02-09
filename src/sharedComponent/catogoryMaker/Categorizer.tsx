import React from "react";
import type { linkType } from "../link/LinkDisplay";
import "./Categorizer.css";

type catergoryDisplayType = {
  linkList: linkType[];
};

const Catergorizer = ({ linkList }: catergoryDisplayType) => {
  return (
    <div className="CategoryContainer">
      <div>Top Sites Saved</div>
      {linkList?.map((link, index) => (
        <div className="CategorizerOptions" key={link.site + index}>
          <div>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.site}
            </a>
          </div>
          <>&nbsp; | &nbsp;</>
        </div>
      ))}
    </div>
  );
};

export { Catergorizer };
