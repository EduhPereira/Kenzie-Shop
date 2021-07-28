import { Container, Items, Bill, Title } from "./styles";
import { useSelector } from "react-redux";
import { ProductCard } from "../../components/ProductCard";

export const MyCart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Title>My Cart</Title>
      <Container>
        <Items>
          {cart.map((product) => (
            <ProductCard key={product.id} product={product} isRemovable />
          ))}
        </Items>
        <Bill>
          <span>
            TOTAL: $
            {cart.reduce((acc, cur) => {
              return cur.price + acc;
            }, 0)}
          </span>
        </Bill>
      </Container>
    </>
  );
};
