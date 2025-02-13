import React from "react";
import { HeaderStyled } from "./header.Styled";
import { Link } from "react-router-dom";
export const Header = ({ toggleMenu, isOpen }) => {
  return (
    <HeaderStyled>
      <Link to={"/"}>
        <h1>INGN</h1>
      </Link>
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? "✕" : "☰"}
      </div>
    </HeaderStyled>
  );
};
