import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  return (
    <div>
      <h1>Carrito de compras</h1>
      {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid black" }}>
          <h2>{product.title}</h2>
          <h3>S/ {product.price}</h3>
          <h3>cantidad: {product.quantity}</h3>
          <Button onClick={() => deleteProductById(product.id)}>
            Eliminar
          </Button>
        </div>
      ))}
      <h2>EL total a pagar es: S/{total}</h2>
      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
      <Button variant="contained" onClick={clearCart}>
        Vaciar Carrito
      </Button>
    </div>
  );
};

export default Cart;
