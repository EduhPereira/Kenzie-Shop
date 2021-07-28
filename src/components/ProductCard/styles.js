import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  text-align: center;
  background-color: #141414;
  padding: 5px;
  border-radius: 5px;
  color: #f0f0f0;

  box-shadow: 12px 12px 9px 0px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 12px 12px 9px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 12px 12px 9px 0px rgba(0, 0, 0, 0.6);
  img {
    width: 100%;
    height: 180px;
    border-radius: 5px;
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
  }
  span {
    font-size: 14px;
    margin: 5px 0 10px 0;
  }
  button {
    font-family: inherit;
    color: inherit;
    background-color: #c24a00;
    border: none;
    border-radius: 5px;
    width: 60%;
    margin: 10px 30px;
    padding: 5px;
    font-weight: 900;
    outline: none;
    cursor: pointer;
    transition: all 0.3s linear;
    :hover {
      background-color: #e35901;
      color: inherit;
    }
  }
`;
