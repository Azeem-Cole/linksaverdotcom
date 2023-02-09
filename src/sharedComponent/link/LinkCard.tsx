import React from "react";
import "./LinkCard.css";

type LinkCardType = {
  url: string;
  name?: string;
  dateAdded: Date;
  site: string;
  siteCount: number;
};

const LinkCard = ({ url, name, dateAdded, site, siteCount }: LinkCardType) => {
  const date = dateAdded.toLocaleString().split(", ");
  return (
    <>
      <p className="LinkInfo LinkName">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </p>

      <table className="LinkDataTable">
        <tr>
          <td>Link</td>
          <td className="Column2">
            <p className="LinkInfo LinkUrl">
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td>Date Added</td>
          <td>
            <p className="LinkInfo LinkDate">{String(date[0])}</p>
          </td>
        </tr>
        <tr>
          <td> Site </td>
          <td>
            <p className="LinkInfo LinkSite">
              You have {siteCount} from&nbsp;
              {
                <a href={site} target="_blank" rel="noopener noreferrer">
                  {site}
                </a>
              }
            </p>
          </td>
        </tr>
      </table>
      <>
        <button>Edit</button>
        <button>add to folder</button>
        <button>Copy</button>
        <button>Delete</button>
      </>
    </>
  );
};

export { LinkCard };
