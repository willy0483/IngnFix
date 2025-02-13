import { Profile } from "../../components/profile/profile";
import { Container } from "../../components/container/container";
import { ProfileContainer } from "../../components/profile/profile.Styled";

export const ProfilePage = () => {
  return (
    <Container width={"1200px"}>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>
    </Container>
  );
};
