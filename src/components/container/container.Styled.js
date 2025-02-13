import styled from "styled-components";

export const ContainerStyled = styled.section`
  max-width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  background-color: ${(props) => props.$bgcolor || "transparent"};
  margin: 1rem auto;
  padding: 0 2rem;

  &.center {
    width: 1200px;
  }
`;
