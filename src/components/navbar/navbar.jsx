import React from "react";
import { NavbarStyled } from "./navbar.Styled";
import { NavLink } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
export const Navbar = ({ isOpen }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <NavbarStyled isOpen={isOpen}>
      <ul>
        <li>
          <NavLink to="/">Alle</NavLink>
        </li>
        <li>
          <NavLink to="/category/Indland">Indland</NavLink>
        </li>
        <li>
          <NavLink to="/category/Udland">Udland</NavLink>
        </li>
        <li>
          <NavLink to="/category/Teknologi">Teknologi</NavLink>
        </li>
        <li>
          <NavLink to="/category/Sport">Sport</NavLink>
        </li>
        <li>
          <NavLink to="/category/Politik">Politik</NavLink>
        </li>
        <li>
          <NavLink to="/category/Samfund">Samfund</NavLink>
        </li>
        <li>
          {isAuthenticated ? <NavLink to="/profile">Profile</NavLink> : <NavLink>Log In</NavLink>}
        </li>
      </ul>
    </NavbarStyled>
  );
};
