import React, { useState, useEffect } from "react";
import "../CSS/Nav.css";
function Nav() {
  const [navbarBlack, setNavbarBlack] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavbarBlack(true);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <nav className={`${navbarBlack && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
        <img
          className="nav__avatar"
          src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png"
          alt="Profile Icon"
        />
      </div>
    </nav>
  );
}

export default Nav;
