import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
const CartItemCounter = ({ product }) => {
  const { buyProducts, cart, setCart } = useContext(dataContext);

  const decrease = () => {
    const productrepeat = cart.find((item) => item.id === product.id);
    productrepeat.quanty !== 1 &&
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...product, quanty: productrepeat.quanty - 1 }
          : item
      )
    );
  };
  return (
    <div className="container-counter">
      <p className="counter-button" onClick={decrease}>-</p>
      <p>{product.quanty}</p>
      <p className="counter-button" onClick={() => buyProducts(product)}>
        +
      </p>
    </div>
  );
};

export default CartItemCounter;
