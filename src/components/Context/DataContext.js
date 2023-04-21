import { createContext, useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
export const dataContext = createContext();

const DataProvider = (props) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);
  const buyProducts = (product) => {
    const productrepeat = cart.find((item) => item.id === product.id);

    if (productrepeat) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quanty: productrepeat.quanty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
    swal({
      text:"Book added successfully to the cart!!",
      icon:"success",
      timer:"1200",
      button : false
    })
  };
  return (
    <dataContext.Provider value={{ cart, setCart, data, buyProducts }}>
      {props.children}
    </dataContext.Provider>
  );
};

export default DataProvider;
