import { Card } from "./styles";
import { addProduct, removeProduct } from "../../store/modules/cart/actions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export const ProductCard = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <img src={product.image} alt="" />
      <h3>{product.name}</h3>
      <span>Price: ${product.price}</span>
      {isRemovable ? (
        <button
          onClick={() => {
            dispatch(removeProduct(product.id));
            toast.success("Removed from Cart");
          }}
        >
          Remove
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(addProduct(product));
            toast.success("Added to Cart");
          }}
        >
          Add
        </button>
      )}
    </Card>
  );
};
