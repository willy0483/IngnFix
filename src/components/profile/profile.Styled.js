import styled from "styled-components";
export const ProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: 0 auto;
  text-align: center;
  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 20px;
      border: 2px solid ${(props) => props.theme.color.black};
    }
  }

  h2 {
    margin: 10px 0;
    font-size: 24px;
    color: #333;
  }

  p {
    margin: 5px 0;
    font-size: 16px;
    color: #666;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(70vh);
`;

export const Notauthenticated = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: calc(100vh - 75px);
`;

export const Roles = styled.div`
  margin-top: 20px;
  text-align: left;

  p {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 10px 0 0 0;

    li {
      background-color: #e9ecef;
      padding: 10px;
      margin-bottom: 5px;
      border-radius: 5px;
      font-size: 16px;
      color: #333;
    }
  }
`;
