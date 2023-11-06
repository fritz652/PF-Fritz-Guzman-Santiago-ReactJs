import { createContext, useState } from "react";
import { products } from "../Mock/productsMock";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  //const addToCart = () => {};
  //const clearCart = () => {};
  //const deleteProductById = () => {};
  //let data = { cart, addToCart, clearCart, deleteProductById };
  const addToCart = (product) => {
    isInCart(product.id);
    let exist = isInCart(product.id);
    if (exist) {
      let newArr = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArr);
    } else {
      setCart([...cart, product]);
    }
  };
  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };

  // limpiar cart

  const clearCart = () => {
    setCart([]);
  };

  // ELimina un elemento del carrito

  const deleteProductById = (id) => {
    console.log("el id es: ", id);
    let newArr = cart.filter((product) => product.id !== id);
    setCart(newArr);
  };

  // totalizar carrito

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  // cantidad de elementos

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    getQuantityById,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
