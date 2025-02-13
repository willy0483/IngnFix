import { ProfileStyled, Notauthenticated, Roles } from "./profile.Styled";

import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../logoutButton/logoutButton";
import { LoginButton } from "../loginButton/loginButton";
import { Container } from "../container/container";
import { Loading } from "../loading/loading";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  const roles = user ? user["https://my-app.example.com/roles"] : [];
  console.log(roles);

  if (isLoading) {
    return (
      <Container width={"1200px"}>
        <Loading />
      </Container>
    );
  }

  if (!isAuthenticated) {
    return (
      <Notauthenticated>
        <p>Not authenticated...</p>
        <LoginButton />
      </Notauthenticated>
    );
  }

  return (
    isAuthenticated && (
      <ProfileStyled>
        <figure>
          <img src={user.picture} alt={user.name} />
          <figcaption>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.nickname}</p>
            <Roles>
              <p>Roles:</p>
              <ul>
                {roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </Roles>

            <LogoutButton />
          </figcaption>
        </figure>
      </ProfileStyled>
    )
  );
};
