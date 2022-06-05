import React from "react";
import "./style.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header__elements">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
          alt=""
          className="header__elements__logo"
        />
        <div className="header__elements__links">
          <a href="https://marvel.com/">Marvel</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
