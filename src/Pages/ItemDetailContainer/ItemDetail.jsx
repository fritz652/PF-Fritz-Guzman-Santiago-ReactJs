import { Card } from "@mui/material";
import CounterContainer from "../../Components/Counter/CounterCountainer";
import "./ItemDetail.css";

function ItemDetail({ productSelected, onAdd, initial }) {
  return (
    <div className="containerItemDetail">
      {/* aca todo el detalle */}
      <div className="boxItemDetal">
        <h2 className="titleProduct">{productSelected.title}</h2>
        <Card className="flex">
          <div>
            <img src={productSelected.img} alt="" className="principalImg"/>
          </div>
          <div style={{ display: "flex", placeItems: "center" }}>
            <div style={{ marginTop: "20%" }}>
              <h4>{productSelected.description}</h4>
              {initial && <h5>Ya tienes {initial} en el carrito</h5>}

              {/* Aca del contador */}
              <CounterContainer 
                stock={productSelected.stock}
                onAdd={onAdd}
                initial={initial}
              />
            </div>
          </div>
        </Card>
        <div className="gridBox">
          <Card variant="outlined">
            <img className="imgPic" src={productSelected.img1} alt="" />
          </Card>
          <Card>
            <img className="imgPic" src={productSelected.img2} alt="" />
          </Card>
          <Card>
            <img className="imgPic" src={productSelected.img3} alt="" />
          </Card>
          <Card>
            <img className="imgPic" src={productSelected.img4} alt="" />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
