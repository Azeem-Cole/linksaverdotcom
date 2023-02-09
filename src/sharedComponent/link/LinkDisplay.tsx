import React from "react";
import { LinkCard } from "./LinkCard";
import "./LinkCard.css";

export type linkType = {
  url: string;
  name: string;
  dateAdded: Date;
  site: string;
  siteCount: number;
};

type LinkDisplayType = {
  linkList?: linkType[];
};

const LinkDisplay = ({ linkList }: LinkDisplayType) => {
  return (
    <div className={"MainLinkArea"}>
      {linkList && (
        <ul className={"LinkCardContainer"}>
          {linkList?.map((link, index) => (
            <li
              key={`${link.url}+${index}`}
              className={`LinkCard ${link.url}+${index}`}
            >
              <LinkCard
                url={link.url}
                name={link.name}
                dateAdded={link.dateAdded}
                site={link.site}
                siteCount={link.siteCount}
              />
            </li>
          ))}
        </ul>
      )}

      {!linkList && <>No Links were received</>}
    </div>
  );
};

export { LinkDisplay };
