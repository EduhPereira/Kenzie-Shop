import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  background-image: url("https://images.unsplash.com/photo-1515777315835-281b94c9589f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  img {
    width: 320px;
    height: 320px;
  }
`;

export const Title = styled.h1`
  width: 200px;
  text-align: center;
  margin: 30px auto 50px;
  color: #f0f0f0;
  background-color: rgb(32, 32, 32);
  font-size: 32px;
  border: 2px solid orange;
  box-shadow: 16px 14px 0px 0px rgba(240, 91, 9, 0.75);
  -webkit-box-shadow: 16px 14px 0px 0px rgba(240, 91, 9, 0.75);
  -moz-box-shadow: 16px 14px 0px 0px rgba(240, 91, 9, 0.75);
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
  padding-bottom: 30px;
`;
