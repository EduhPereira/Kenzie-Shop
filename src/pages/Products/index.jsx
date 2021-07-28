import { useSelector } from "react-redux";
import { ProductCard } from "../../components/ProductCard";
import { Container, Title } from "./styles";

export const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <>
      <Title>Products</Title>
      <Container>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Container>
    </>
  );
};
