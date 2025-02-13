import { LogoutButtonStyled } from "./logoutButton.Styled";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <LogoutButtonStyled
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
    >
      Log Out
    </LogoutButtonStyled>
  );
};
