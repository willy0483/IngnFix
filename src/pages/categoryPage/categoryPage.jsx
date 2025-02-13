import React, { useState, useEffect } from "react";
import { client } from "../../client/contentfulClient";
import { useParams } from "react-router-dom";
import { Category } from "../../components/category/category";
import { CategoryHeader } from "../../components/category/category.Styled";
import { Article } from "../../components/article/article";
import { AuthorName, DateAuthorContainer, ReadMore } from "../../components/article/article.Styled";
import { ReleaseDate } from "../../components/releaseDate/releaseDate";
import { Container } from "../../components/container/container";
import { GridContainer } from "../../components/gridContainer/gridContainer";
import { NavLink } from "react-router-dom";
import { GridItem, NeedLogIn } from "../../components/gridContainer/gridContainer.Styled";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../../components/loginButton/loginButton";
import { Loading } from "../../components/loading/loading";

export const CategoryPage = () => {
  const { category } = useParams();
  const [categoryArticles, setCategoryArticles] = useState();
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    client
      .getEntries({
        content_type: "article",
        "fields.kategori": category,
      })
      .then((data) => setCategoryArticles(data))
      .catch((err) => console.log(err));
  }, [category]);

  if (isLoading) {
    return (
      <Container width={"1200px"}>
        <Loading />
      </Container>
    );
  }

  console.log(categoryArticles);

  return (
    <Container width={"1200px"}>
      <CategoryHeader>
        <h1>{category}</h1>
      </CategoryHeader>
      <Category>
        <GridContainer>
          {categoryArticles?.items.map((article, index) => (
            <React.Fragment key={article.sys.id}>
              {isAuthenticated ? (
                <GridItem
                  index={index}
                  key={article.sys.id}
                  className={`grid-item grid-item-${index}`}
                >
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
                          </ReadMore>
                        </figcaption>
                        <img src={"https:" + article.fields.billede.fields.file.url} alt="" />
                      </figure>
                    </NavLink>
                  </Article>
                </GridItem>
              ) : (
                <GridItem
                  index={index}
                  key={article.sys.id}
                  className={`grid-item grid-item-${index}`}
                >
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
          ))}
        </GridContainer>
      </Category>
    </Container>
  );
};
