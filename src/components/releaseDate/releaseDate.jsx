import { ReleaseDateStyled } from "./releaseDate.Styled";
export const ReleaseDate = ({ dateString }) => {
  const date = new Date(dateString);
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);
  const formattedDateWithPrefix = `D. ${formattedDate.replace(/\//g, "-")}`;
  return <ReleaseDateStyled>{formattedDateWithPrefix}</ReleaseDateStyled>;
};
