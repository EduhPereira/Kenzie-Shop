import styled from "styled-components";
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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Items = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 22px;
  min-height: 300px;
  width: 85%;
`;

export const Bill = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e77a31;
  width: 15%;
  height: 50px;
  border-radius: 10px;
  font-weight: 900;
  box-shadow: 18px 11px 10px 0px rgba(143, 56, 3, 0.76);
  -webkit-box-shadow: 18px 11px 10px 0px rgba(143, 56, 3, 0.76);
  -moz-box-shadow: 18px 11px 10px 0px rgba(143, 56, 3, 0.76);
  @media (max-width: 425px) {
    width: 50%;
    margin-top: 20px;
  }
`;
