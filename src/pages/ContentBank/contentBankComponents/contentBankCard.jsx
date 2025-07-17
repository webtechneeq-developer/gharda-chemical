import React from "react";
import "./contentBankCard.css";

export function ContentBankCard({ title, listItems, isOpen, onToggle }) {
  console.log("isOpen", isOpen);
  console.log("title", title);
  console.log("listItems", listItems);

  return (
    <div className="card-title-item">
      <div className="card-header" onClick={onToggle}>
        <div className="user-info">
          <div className="avatar">
            <img
              className="content-img"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRklEQVR4nO2YQUgWQRTHf59ahGJRGHQLunkIicJTUacIkgQJOiaeqotRR7saQhFFh6JjFEjdoksdhKRD4CHKQ5Ag0q0kVChIsUYG/h8Mml+73+zMrLYPHh+733v/N7/dmd03C5VtLTMB/RNwYDuAmJgwRh5KNxqMCQwy7fzuD1BnQ8FQunbwH2PcGRMYhFgwJgJIFBgTCSQ4jIkIYi0YTGyQYDApQILApAIpHCbGmz2rTxdRsGhrtjcrHUj0cZgKpFgz1R2RVVOrYDPV1PrfppYp2DezCqRsU6sbuLwdQLwtBUgnMAxMAT/lUzpn/ys9yEHgNrDY4GGwqBgbm/ypVbcacBQYAd4Cq07MG6AP6JL36Vz9/1XljEijlhJkft35ZWAc6G1Q7xjwWNPNzZ33BfGxZWk/A4aAfTly24EB4IlzEZKBLEg7D8Df9vVW4zsJQWalfdhD44g0ZlKCTEj7jIfGOWm8SrHY7Xqw9lDHVz1AbkjjXgqQ+8od1PELD5BJaVzwBfGxQ9JeAtqayN8NrAC/s3y8C/1mfy/9s03kXlKuvSukBrku/dc582r6jOquuaQge4EfwB+gJ0feeY3rK7CrLE3jqGq8A1oyxHcAc8qxHTFlAdkDfFGdKxniHyj2A7CzbG38CXW0K8DJBnEXNZ5fOadi1P3ImGp922SQ/U6jeS2vuIngL4FWrY+nThN42hnHoANxt5mrZCL5LdXbATzXOfsku+OsCeuPsmyiymItwE2B1AHs29vuBreknVJ7/hk4/q/oNbSt642DLNtOAAAAAElFTkSuQmCC"
              alt="privacy-policy"
            />
          </div>
          <p className="email">{title}</p>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className={`arrow-icon ${isOpen ? "rotate" : ""}`}
          >
            <path
              clipRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {isOpen === true
        ? (console.log("Rendering menu for", title),
          (
            <div className="menu">
              {title &&
                listItems.map((item, index) => (
                  <a href="#" key={index} className="menu-item blue">
                    <div className="indicator"></div>
                    <div className="icon-box">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="menu-icon"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{item}</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="arrow-icon"
                    >
                      <path
                        clipRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                ))}
            </div>
          ))
        : null}
    </div>
  );
}

export function ContentBankCardGeneral({ listItems }) {
  return (
    <div className="card-title-item">
      <div className="card-header">
        <div className="user-info">
          <div className="avatar">
            <img
              className="content-img"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRklEQVR4nO2YQUgWQRTHf59ahGJRGHQLunkIicJTUacIkgQJOiaeqotRR7saQhFFh6JjFEjdoksdhKRD4CHKQ5Ag0q0kVChIsUYG/h8Mml+73+zMrLYPHh+733v/N7/dmd03C5VtLTMB/RNwYDuAmJgwRh5KNxqMCQwy7fzuD1BnQ8FQunbwH2PcGRMYhFgwJgJIFBgTCSQ4jIkIYi0YTGyQYDApQILApAIpHCbGmz2rTxdRsGhrtjcrHUj0cZgKpFgz1R2RVVOrYDPV1PrfppYp2DezCqRsU6sbuLwdQLwtBUgnMAxMAT/lUzpn/ys9yEHgNrDY4GGwqBgbm/ypVbcacBQYAd4Cq07MG6AP6JL36Vz9/1XljEijlhJkft35ZWAc6G1Q7xjwWNPNzZ33BfGxZWk/A4aAfTly24EB4IlzEZKBLEg7D8Df9vVW4zsJQWalfdhD44g0ZlKCTEj7jIfGOWm8SrHY7Xqw9lDHVz1AbkjjXgqQ+8od1PELD5BJaVzwBfGxQ9JeAtqayN8NrAC/s3y8C/1mfy/9s03kXlKuvSukBrku/dc582r6jOquuaQge4EfwB+gJ0feeY3rK7CrLE3jqGq8A1oyxHcAc8qxHTFlAdkDfFGdKxniHyj2A7CzbG38CXW0K8DJBnEXNZ5fOadi1P3ImGp922SQ/U6jeS2vuIngL4FWrY+nThN42hnHoANxt5mrZCL5LdXbATzXOfsku+OsCeuPsmyiymItwE2B1AHs29vuBreknVJ7/hk4/q/oNbSt642DLNtOAAAAAElFTkSuQmCC"
              alt="privacy-policy"
            />
          </div>
          {listItems.map((item, index) => (
            <p key={index} className="email">
              {item}
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="arrow-icon"
              >
                <path
                  clipRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  fillRule="evenodd"
                />
              </svg>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
