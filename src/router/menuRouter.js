import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home/Home";
import ItemDetailContainer from "../Pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../Pages/ItemListContainer/ItemListContainer";
import Login from "../Pages/Login/Login";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "all",
    path: "/all",
    Element: ItemListContainer,
  },
  {
    id: "categoryName",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "login",
    path: "/login",
    Element: Login,
  },
];
