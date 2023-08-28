import { FC } from "react";
import "../styles/Header.scss";
import NavBar from "./NavBar";

const navItems = [
    {
        label: "Characters / ",
        href: "/",
    },
    {
        label: "Comics",
        href: "/comics",
    },
];

const Header: FC = () => {
    return (
      <header className="header">
            <h1 className="header__title">
                <span className="header__title-red">Marvel</span> information
                portal
            </h1>
            <NavBar navItems={navItems} />
        </header>
    );
};

export default Header;
