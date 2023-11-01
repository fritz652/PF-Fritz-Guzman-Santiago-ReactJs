import ProductCard from "../../Components/ProductCard/ProductCard";

function ItemList({ items }) {
  console.log(items);
  return (
    <section style={{ display: "flex" }}>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
}

export default ItemList;
