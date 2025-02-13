import React, { useEffect, useState } from "react";
import { client } from "../../client/contentfulClient";
import { NavLink } from "react-router-dom";

import { Article } from "../../components/article/article";
import { AuthorName, DateAuthorContainer, ReadMore } from "../../components/article/article.Styled";
import { ReleaseDate } from "../../components/releaseDate/releaseDate";
import { Container } from "../../components/container/container";
import { GridContainer } from "../../components/gridContainer/gridContainer";
import { GridItem, NeedLogIn } from "../../components/gridContainer/gridContainer.Styled";
import { Loading } from "../../components/loading/loading";

import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "../../components/loginButton/loginButton";

export const HomePage = () => {
  const [articleData, setArticleData] = useState();
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    client
      .getEntries({
        content_type: "article",
        limit: 13,
      })
      .then((data) => setArticleData(data))
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <Container width={"1200px"}>
        <Loading />
      </Container>
    );
  }

  console.log(articleData);

  return (
    <Container width={"1200px"}>
      <GridContainer>
        {articleData?.items?.map((article, index) => {
          const className = index < 9 ? `grid-item grid-item-${index}` : "";
          return (
            <React.Fragment key={article.sys.id}>
              {isAuthenticated ? (
                <GridItem index={index} key={article.sys.id} className={className}>
                  <Article>
                    <NavLink to={`/details/${article.sys.id}`} key={article.sys.id}>
                      <figure>
                        <figcaption>
                          <h3>{article.fields.overskrift}</h3>
                          {article.fields.underrubrik ? <p>{article.fields.underrubrik}</p> : ""}
                          <DateAuthorContainer>
                            <ReleaseDate dateString={article.fields.dato}></ReleaseDate>
                            <span> - </span>
                            <AuthorName>{article.fields.forfatter}</AuthorName>
                          </DateAuthorContainer>
                          <ReadMore>
                            <p>Læs mere</p>
                          </ReadMore>{" "}
                        </figcaption>
                        <img src={"https:" + article.fields.billede.fields.file.url} alt="" />
                      </figure>
                    </NavLink>
                  </Article>
                </GridItem>
              ) : (
                <GridItem index={index} key={article.sys.id} className={className}>
                  <Article>
                    <NeedLogIn className={`need-login-${index}`}>
                      <div>
                        <p>Log ind for at se artikler</p>
                        <LoginButton />
                      </div>
                    </NeedLogIn>
                  </Article>
                </GridItem>
              )}
            </React.Fragment>
          );
        })}
      </GridContainer>
    </Container>
  );
};
