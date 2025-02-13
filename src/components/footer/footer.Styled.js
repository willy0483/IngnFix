import styled from "styled-components";
import { ResetList } from "../../styles/mixins";

export const FooterStyled = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 2rem;

  div {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
  ul {
    ${ResetList}
    li:first-of-type {
      font-size: 1.1rem;
      margin: 1rem 0;
    }
    li {
      margin: 0.5rem 0;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.grid.breakpoints.s}) {
    div {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.grid.breakpoints.m}) {
    display: grid;
    grid-template-columns: 1fr;

    div {
      justify-content: center;
      gap: 1rem;
      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        li:first-of-type {
          font-size: 1.5rem;
          text-decoration: underline;
          margin: 0;
        }
      }
    }
  }
`;
