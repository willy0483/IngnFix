import { UserStyled } from "./user.Styled";
import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "../loginButton/loginButton";
import { NavLink } from "react-router-dom";

export const User = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const roles = user ? user["http://localhost/roles"] : [];
  console.log(roles);

  if (isLoading) {
    return;
  }

  return (
    <UserStyled>
      {isAuthenticated ? (
        <NavLink to="/profile">
          <img src={user.picture} alt={user.name} />
        </NavLink>
      ) : (
        <LoginButton />
      )}
    </UserStyled>
  );
};
