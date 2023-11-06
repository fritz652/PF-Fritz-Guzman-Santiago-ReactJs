import { useState, useEffect } from "react";
import { products } from "../../Mock/productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 2000);
    });
    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div
      style={{
        paddingTop: "80px",
      }}
    >
      {items.length === 0 ? (
        <BeatLoader
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            paddingTop: "200px",
          }}
        />
      ) : (
        <ItemList items={items} cssOverride={{}} />
      )}
    </div>
  );
};

export default ItemListContainer;
