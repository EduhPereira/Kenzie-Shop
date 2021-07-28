import { MyHeader } from "./styles";
import { useHistory } from "react-router";
export const Header = () => {
  const history = useHistory();
  return (
    <MyHeader>
      <img
        src="https://companiesmarketcap.com/img/company-logos/256/HOG.png"
        alt="Harley Davidson logo"
      />
      <ul>
        <li onClick={() => history.push("/")}>Products</li>
        <li onClick={() => history.push("/cart")}>Cart</li>
      </ul>
    </MyHeader>
  );
};
