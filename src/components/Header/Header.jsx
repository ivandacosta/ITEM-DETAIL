import React from "react";
import Nav from "../Navigation/Nav";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

//style
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="Logo">
        <h2>GOU</h2>
      </div>

      <Nav />

      <div className="Cart">
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </header>
  );
}

export default Header;
