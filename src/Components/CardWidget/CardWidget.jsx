import "./CardWidget.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

const CardWidget = () => {
  return (
    <ul className="navTwo">
      <li>
        <Link href="#">
          <SearchIcon />
        </Link>
      </li>
      <li>
        <Link>
          <PersonOutlineOutlinedIcon />
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <Badge badgeContent={4} showZero color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </Link>
      </li>
    </ul>
  );
};

export default CardWidget;
