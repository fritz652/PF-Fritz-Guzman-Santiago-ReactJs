import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import './CheckoutFormik.css'

const CheckoutFormik = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const total = getTotalPrice();
  const [orderId, setOrderId] = useState(null);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
    },
    onSubmit: (values) => {
      let order = {
        buyer: values,
        items: cart,
        total: total,
        date: serverTimestamp(),
      };

      const ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((e) => {
        let refDoc = doc(db, "products", e.id);
        updateDoc(refDoc, {
          stock: e.stock - e.quantity,
        });
      });

      clearCart();
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El campo es obligatorio")
        .min(3, "Debe tener al menos 3 caracteres")
        .max(20, "No debe tener más de 20 caracteres"),
      apellido: Yup.string()
        .required("El campo es obligatorio")
        .min(3, "Debe tener al menos 3 caracteres")
        .max(20, "No debe tener más de 20 caracteres"),
      email: Yup.string()
        .required("El campo es obligatorio")
        .email("Email no válido, asegúrate de contener el símbolo @"),
    }),
  });

  return (
    <>
      {orderId ? (
        <div className="boxCheckoutFormik">
          <div className="boxInside">
            <h2>Gracias por su compra, su N° de comprobante es: {orderId}</h2>
            <Link className="boxLink" to="/">
              Seguir comprando
            </Link>
          </div>
        </div>
      ) : (
        <div style={{ padding: "50px" }}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              name="nombre"
              onChange={formik.handleChange}
              value={formik.values.nombre}
              error={formik.touched.nombre && Boolean(formik.errors.nombre)}
              helperText={formik.touched.nombre && formik.errors.nombre}
            />
            <TextField
              id="outlined-basic"
              label="Apellido"
              variant="outlined"
              name="apellido"
              onChange={formik.handleChange}
              value={formik.values.apellido}
              error={formik.touched.apellido && Boolean(formik.errors.apellido)}
              helperText={formik.touched.apellido && formik.errors.apellido}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <Button variant="contained" type="submit">
              Comprar
            </Button>
            <Button variant={"outlined"} type="button">
              Cancelar
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default CheckoutFormik;
