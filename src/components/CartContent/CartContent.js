import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartEmpty from "./CartEmpty";
import NavBar from "../NavBar/NavBar";
const CartContent = () => {
  const { cart } = useContext(dataContext);

  //Condition "" : ""

  return (
    <>
      <NavBar></NavBar>
      {cart.length > 0 ? (
        <div className="main-container">
          <CartElements />
          <CartTotal />
        </div>
      ) : (
        <CartEmpty />
      )}
    </>
  );
};
export default CartContent;
