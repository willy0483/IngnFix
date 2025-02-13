import styled from "styled-components";

export const ArticleContainer = styled.article`
  background-color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  a {
    text-decoration: none;
  }

  figure {
    margin: 0;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    figcaption {
      width: 100%;
      color: ${(props) => props.theme.color.black};
      padding: 1rem;
      box-sizing: border-box;
      h2,
      h3 {
        margin: 0;
      }

      h2 {
        font-size: 1.5rem;
      }

      h3 {
        font-size: 1.2rem;
      }
    }
  }
`;

export const AuthorName = styled.div``;

export const DateAuthorContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  font-size: 0.9rem;
  color: red;
  margin: 0.5rem 0;
`;
export const ReadMore = styled.div`
  p {
    text-decoration: underline;
  }
`;
