import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {

    return  (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className={"navbar-brand"} to={"/"}> Anagram finder </Link>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className={"nav-link"} to={"/fetch"}> Fetch </Link>
                    </li>

                    <li className="nav-item">
                        <Link className={"nav-link"} to={"/search"}> Search </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;