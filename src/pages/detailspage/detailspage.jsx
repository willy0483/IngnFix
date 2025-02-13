import { useState, useEffect } from "react";
import { client } from "../../client/contentfulClient";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Details } from "../../components/details/details";
import { Container } from "../../components/container/container";
import { AuthorName, DateAuthorContainer } from "../../components/article/article.Styled";
import { ReleaseDate } from "../../components/releaseDate/releaseDate";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "../../components/loading/loading";

export const Detailspage = () => {
  const { articleID } = useParams();
  const [articleDetails, setArticleDetails] = useState();
  const { isLoading } = useAuth0();

  useEffect(() => {
    client
      .getEntries({
        content_type: "article",
        "sys.id": articleID,
      })
      .then((data) => setArticleDetails(data))
      .catch((err) => console.log(err));
  }, [articleID]);

  console.log(articleDetails);

  if (isLoading) {
    return (
      <Container width={"1200px"}>
        <Loading />
      </Container>
    );
  }

  return (
    <Container width={"1200px"}>
      <Details>
        {articleDetails?.items?.map((article) => {
          return (
            <div key={article.sys.id}>
              <figure>
                <img
                  src={article.fields.billede.fields.file.url}
                  alt={article.fields.billede.fields.file.fileName}
                />
                <figcaption>
                  <h1>{article.fields.overskrift}</h1>
                  {article.fields.underrubrik ? <p>{article.fields.underrubrik}</p> : ""}
                  <DateAuthorContainer>
                    <ReleaseDate dateString={article.fields.dato}></ReleaseDate>
                    <span> - </span>
                    <AuthorName>{article.fields.forfatter}</AuthorName>
                  </DateAuthorContainer>
                  <article>{documentToReactComponents(article.fields.indhold)};</article>
                </figcaption>
              </figure>
            </div>
          );
        })}
      </Details>
    </Container>
  );
};
