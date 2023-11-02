import CounterContainer from "../../Components/Counter/CounterCountainer";

function ItemDetail({ productSelected, onAdd }) {
  return (
    <div>
      {/* aca todo el detalle */}
      <h2>{productSelected.title}</h2>
      {/* Aca del contador */}
      <CounterContainer stock={productSelected.stock} />
      <button onClick={() => onAdd(productSelected)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetail;
