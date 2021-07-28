import styled from "styled-components";
export const MyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background-color: black;
  color: #e4e4e4;
  font-size: 1.15rem;

  img {
    width: 80px;
    height: 80px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    cursor: pointer;

    li {
      transition: all 0.3s linear;

      :hover {
        color: #fff;
      }
    }
  }
`;
