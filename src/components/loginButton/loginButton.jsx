import { LoginButtonStyled } from "./loginButton.Styled";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <LoginButtonStyled onClick={() => loginWithRedirect()}>Log In</LoginButtonStyled>;
};
