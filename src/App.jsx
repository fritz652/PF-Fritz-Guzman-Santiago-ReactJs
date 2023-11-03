//React Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
//layout
import Header from "./Layout/Header/Header";
import NavBar from "./Layout/NavBar/NavBar";
import Footer from "./Layout/Footer/Footer";
//Components

//Pages
import Home from "./Pages/Home/Home";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import Login from "./Pages/Login/Login";
//import CounterCountainer from "./Components/Counter/CounterCountainer";
import FetchingData from "./Pages/FechingData/FetchingData";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
