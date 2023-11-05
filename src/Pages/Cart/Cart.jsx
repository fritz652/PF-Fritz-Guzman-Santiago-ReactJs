import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h1>Carrito de compras</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <h4>cantidad: {product.quantity}</h4>
        </div>
      ))}
      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
    </div>
  );
};

export default Cart;
