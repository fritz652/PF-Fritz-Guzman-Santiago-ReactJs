import CounterContainer from "../../Components/Counter/CounterCountainer";

function ItemDetail({ productSelected, onAdd, initial }) {
  return (
    <div>
      {/* aca todo el detalle */}
      <h2>{productSelected.title}</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={productSelected.img} alt="" style={{ width: "1000px" }} />
        <div style={{ display: "grid", gridArea: "1fr 1fr" }}>
          <img src={productSelected.img1} alt="" style={{ height: "500px" }} />
          <img src={productSelected.img2} alt="" style={{ height: "500px" }} />
          <img src={productSelected.img3} alt="" style={{ height: "500px" }} />
          <img src={productSelected.img4} alt="" style={{ height: "500px" }} />
        </div>
      </div>
      {initial && <h5>Ya tienes {initial} en el carrito</h5>}
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
