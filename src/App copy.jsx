//React Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
//layout
import Header from "./Components/Header/Header.jsx";
//Components

//Pages
import Home from "./Pages/Home/Home";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import Login from "./Pages/Login/Login";
//import CounterCountainer from "./Components/Counter/CounterCountainer";
import FetchingData from "./Pages/FechingData/FetchingData";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Pages/Cart/Cart";
import { ThemeProvider } from "@emotion/react";
import customTheme from "./themeConfig";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <Header />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/all" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
