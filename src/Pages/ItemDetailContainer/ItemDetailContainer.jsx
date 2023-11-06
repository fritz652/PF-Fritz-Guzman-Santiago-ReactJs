import { useContext, useEffect, useState } from "react";
import { products } from "../../Mock/productsMock";
import ItemDetail from "./ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let totalQuantity = getQuantityById(+id);

  useEffect(() => {
    let producto = products.find((product) => product.id === +id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
      //reject("error")
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let item = {
      ...productSelected,
      quantity: cantidad,
    };
    addToCart(item);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 800,
    });
  };

  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      initial={totalQuantity}
    />
  );
};

export default ItemDetailContainer;
