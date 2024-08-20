import "./CardWidget.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CardWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    <ul className="navTwo">
      {/* <li>
        <Link href="#">
          <SearchIcon />
        </Link>
      </li> */}
      <li>
        <Link to="/login">
          <PersonOutlineOutlinedIcon className="h-color" />
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <Badge badgeContent={total} showZero color="primary">
            <ShoppingCartOutlinedIcon className="h-color"/>
          </Badge>
        </Link>
      </li>
    </ul>
  );
};

export default CardWidget;
