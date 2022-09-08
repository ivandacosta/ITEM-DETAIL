import React from "react";
import Nav from "../Navigation/Nav";

//style
import "./Header.css"

function Header (){
    return(
        <header>
            <div className="Logo">
                <h2>Logo</h2>
            </div>

            <Nav/>

            <div className="Cart">
                <h2>Cart</h2>
            </div>
        </header>
    )
}

export default Header