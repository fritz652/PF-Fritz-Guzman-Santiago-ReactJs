import CounterContainer from "../../Components/Counter/CounterCountainer";

function ItemDetail({ productSelected, onAdd, initial }) {
  return (
    <div>
      {/* aca todo el detalle */}
      <h2>{productSelected.title}</h2>
      <img src={productSelected.img} alt="" />
      <img src={productSelected.img1} alt="" />
      {/* Aca del contador */}
      <CounterContainer
        stock={productSelected.stock}
        onAdd={onAdd}
        initial={initial}
      />
    </div>
  );
}

export default ItemDetail;
