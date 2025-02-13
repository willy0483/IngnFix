import { ContainerStyled } from "./container.Styled";

export const Container = ({ bgcolor, height, width, className, children }) => {
  return (
    <ContainerStyled $bgcolor={bgcolor} width={width} height={height} className={className}>
      {children}
    </ContainerStyled>
  );
};
