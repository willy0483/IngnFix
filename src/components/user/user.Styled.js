import styled from "styled-components";
export const UserStyled = styled.div`
  grid-area: user;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 0.1rem solid ${(props) => props.theme.color.black};
  }
  @media screen and (max-width: ${(props) => props.theme.grid.breakpoints.s}) {
    display: none;
  }
`;
