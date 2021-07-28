import { useSelector } from "react-redux";
import { ProductCard } from "../../components/ProductCard";
import { Container, Title, Banner } from "./styles";

export const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <>
      <Banner>
        <img
          src="https://prod.cloud.rockstargames.com/crews/sc/7863/16106112/publish/emblem/emblem_256.png"
          alt=""
        />
      </Banner>
      <Title>Products</Title>
      <Container>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Container>
    </>
  );
};
