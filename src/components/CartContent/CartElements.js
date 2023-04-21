import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";
import CartItemCounter from "./cartItemCounter";

const CartElements = () => {
  const { cart, setCart } = useContext(dataContext);
  const deleteProduct = (id) =>{
    const foundId = cart.find((e)=>e.id=== id);

    const newCart = cart.filter((e)=>{
      return e !== foundId
    })
    setCart(newCart)
  }
  return cart.map((product) => {
    return (
      <div className="cartContent" key={product.id}>
        <img src={product.img} alt="product-image" />
        <h3 className="name">{product.name}</h3>
        <CartItemCounter product={product}></CartItemCounter>
        <h4 className="price">${product.price * product.quanty}</h4>
        <h3 onClick={()=>{deleteProduct(product.id)}} className="cart-delete-button">❌</h3>
      </div>
    );
  });
};

export default CartElements;
