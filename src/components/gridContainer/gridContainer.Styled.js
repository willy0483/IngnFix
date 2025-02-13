import styled from "styled-components";

export const GridItem = styled.div`
  ${({ index }) =>
    index >= 9 &&
    index <= 1000 &&
    `
    figure {
      display: grid;
      grid-template-columns: 1fr 1fr;

    }
  `}
`;
export const GridContainerStyled = styled.div`
  display: grid;
  grid-template-areas:
    "item item"
    "itemOne itemTwo"
    "itemOne itemThree"
    "itemFour itemThree"
    "itemFive itemFive"
    "itemSix itemSix"
    "itemSeven itemEight";
  grid-template-columns: 1fr 1fr;

  grid-auto-rows: max-content;
  gap: 20px;
  figure {
    height: 315px;
    display: grid;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .grid-item-0 {
    grid-area: item;
    figure {
      height: 630px;
    }
  }
  .grid-item-1 {
    grid-area: itemOne;
    figure {
      height: 630px;
    }
  }
  .grid-item-2 {
    grid-area: itemTwo;
    figure {
      height: 315px;
      display: flex;
      flex-direction: column-reverse;
    }
  }
  .grid-item-3 {
    grid-area: itemThree;
    figure {
      height: 630px;
    }
  }
  .grid-item-4 {
    grid-area: itemFour;
    figure {
      height: 315px;
    }
  }
  .grid-item-5 {
    grid-area: itemFive;
    figure {
      height: 315px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "imageFive textFive";
      img {
        grid-area: imageFive;
      }
      figcaption {
        grid-area: textFive;
      }
    }
  }
  .grid-item-6 {
    grid-area: itemSix;
    figure {
      height: 315px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "textSix imageSix";
      img {
        grid-area: imageSix;
      }
      figcaption {
        grid-area: textSix;
      }
    }
  }

  .grid-item-7 {
    grid-area: itemSeven;
    figure {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: minmax(0, 0.7fr) minmax(0, 1fr);
      height: 315px;
    }
  }

  .grid-item-8 {
    grid-area: itemEight;
    figure {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: minmax(0, 0.7fr) minmax(0, 1fr);
      height: 315px;
    }
  }

  .need-login-0 {
    height: 630px;
  }
  .need-login-1 {
    height: 630px;
  }
  .need-login-2 {
    height: 315px;
  }
  .need-login-3 {
    height: 630px;
  }
  .need-login-4 {
    height: 315px;
  }
  .need-login-5 {
    height: 315px;
  }
  .need-login-6 {
    height: 315px;
  }
  .need-login-7 {
    height: 315px;
  }
  .need-login-8 {
    height: 315px;
  }

  @media screen and (max-width: ${(props) => props.theme.grid.breakpoints.s}) {
    .grid-item-5,
    .grid-item-6 {
      figure {
        display: block;
        height: auto;
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.grid.breakpoints.m}) {
    grid-template-areas:
      "item"
      "itemOne"
      "itemTwo"
      "itemThree"
      "itemFour"
      "itemFive"
      "itemSix"
      "itemSeven"
      "itemEight";
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 20px;
    .grid-item-0,
    .grid-item-1,
    .grid-item-2,
    .grid-item-3,
    .grid-item-4,
    .grid-item-5,
    .grid-item-6,
    .grid-item-7,
    .grid-item-8 {
      figure {
        display: block;
        height: 500px;
      }
    }

    figure {
      grid-template-columns: 1fr;
      grid-auto-rows: max-content;
      height: 500px;
    }

    .need-login-0,
    .need-login-1,
    .need-login-2,
    .need-login-3,
    .need-login-4,
    .need-login-5,
    .need-login-6,
    .need-login-7,
    .need-login-8 {
      height: 500px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.grid.breakpoints.l}) {
    figure {
      grid-template-columns: 1fr;
    }
  }
`;

export const NeedLogIn = styled.div`
  height: 315px;
  background-color: ${(props) => props.theme.color.red};
  color: ${(props) => props.theme.color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background-color: ${(props) => props.theme.color.white};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  }

  @media screen and (max-width: ${(props) => props.theme.grid.breakpoints.s}) {
    height: auto;
    padding: 1rem;
    max-height: 500px;
    div {
      padding: 0.5rem;
    }
  }
`;
