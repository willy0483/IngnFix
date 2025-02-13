import { FooterStyled } from "./footer.Styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <ul>
          <li>Adresse:</li>
          <li>Intet nyt - Godt nyt ApS</li>
          <li>Tulipanvej 232</li>
          <li>7320</li>
          <li>Valby Øster</li>
        </ul>
        <ul>
          <li>Links</li>
          <li>vikanweb.dk</li>
          <li>overpådenandenside.dk</li>
          <li>retsinformation.dk</li>
          <li>nogetmednews.dk</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Politik</li>
          <li>Privatlivspolitik</li>
          <li>Cookiepolitik</li>
          <li>Købsinformation</li>
          <li>Delingspolitik</li>
        </ul>
        <ul>
          <li>Kontakt</li>
          <li>ingn@nyhed.dk</li>
          <li>teletfon: 23232323</li>
          <li>fax: 123123-333</li>
        </ul>
      </div>
    </FooterStyled>
  );
};
