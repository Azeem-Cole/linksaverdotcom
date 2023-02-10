import React from "react";
import type { linkType } from "../link/LinkDisplay";
import "./Categorizer.css";

type catergoryDisplayType = {
  linkList: linkType[];
};

const Catergorizer = ({ linkList }: catergoryDisplayType) => {
  const counts = {};

  linkList.forEach(function (x) {
    counts[x.site] = (counts[x.site] || 0) + 1;
  });

  const length = Object.keys(counts).length;

  var count = 0;
  const linkCountlist = Object.entries(counts).map(([key, value]) => {
    count++;

    return (
      <div className="CategorizerOptions" key={key + value + count}>
        <div>
          <a href={key} target="_blank" rel="noopener noreferrer">
            {`${key} (${value})`}
          </a>
        </div>

        {count !== length && <>&nbsp; | &nbsp;</>}
      </div>
    );
  });

  return (
    <div className="CategoryContainer">
      <div>Top Sites Saved</div>
      {linkCountlist}
    </div>
  );
};

export { Catergorizer };
