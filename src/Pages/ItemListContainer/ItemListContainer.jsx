import { useState, useEffect } from "react";
/* import { products } from "../../Mock/productsMock"; */
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = undefined;

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(newArray);
    });
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
