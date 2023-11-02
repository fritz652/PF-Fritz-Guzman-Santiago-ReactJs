import { useEffect, useState } from "react";
import { products } from "../../Mock/productsMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  let id = 3;

  useEffect(() => {
    let producto = products.find((product) => product.id === id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
      //reject("error")
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (product) => {
    console.log("se agrego al carrito", product);
  };

  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;
