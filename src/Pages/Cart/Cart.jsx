import { Button, IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "¿Seguro que quieres vaciar el carrito",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, no quiero vaciar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Carrito sin vaciar", "", "info");
      }
    });
  };

  return (
    <div
      style={{
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {(cart.length > 0 && <h1>Carrito de compras</h1>) ||
        (cart.length <= 0 && <h1>Carrito de compras vacío</h1>)}
      {cart.map((product) => (
        <div
          key={product.id}
          style={{
            border: "2px solid black",
            display: "flex",
            height: "200px",
            alignItems: "center",
            gap: "50px",
            borderRadius: "10px",
          }}
        >
          <img src={product.img} alt="" style={{ maxWidth: "180px" }} />
          <h4 style={{ maxWidth: "150px" }}>{product.title} </h4>
          <h3 style={{ width: "100px" }}>S/ {product.price}</h3>
          <h3> {product.quantity}</h3>
          <IconButton onClick={() => deleteProductById(product.id)}>
            <DeleteIcon color="primary" />
          </IconButton>
        </div>
      ))}

      {cart.length > 0 && (
        <div style={{ display: "flex", gap: "30px" }}>
          <h2>EL total a pagar es: S/{total}</h2>
          <div style={{ display: "flex", gap: "30px" }}>
            <Link to="/checkout">
              <Button variant="contained">Finalizar compra</Button>
            </Link>
            <Button variant="contained" onClick={clearCartWithAlert}>
              Vaciar Carrito
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
