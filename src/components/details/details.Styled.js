import styled from "styled-components";
export const DetailsStyled = styled.section`
  background-color: ${(props) => props.theme.color.white};
  img {
    width: 100%;
    height: 100%;
    max-height: 500px;
    display: block;
  }
  figure {
    figcaption {
      padding: 1rem;
      article {
        max-width: 800px;
        margin: 2rem auto;
        p {
          margin: 1rem 0;
        }
      }
      h1 {
        font-size: 2rem;
        margin: 1rem 0;
      }
    }
  }
`;
