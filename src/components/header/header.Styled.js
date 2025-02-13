import styled from "styled-components";

export const HeaderStyled = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
  padding: 1rem 2rem;
  position: relative;
  height: 75px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.red};
  }

  .burger-menu {
    display: block;
    color: ${(props) => props.theme.color.black};
    font-size: 1.5rem;
    cursor: pointer;
  }

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.s}) {
    padding: 0;
    justify-content: center;
    .burger-menu {
      display: none;
      color: ${(props) => props.theme.color.white};
    }
  }
`;
