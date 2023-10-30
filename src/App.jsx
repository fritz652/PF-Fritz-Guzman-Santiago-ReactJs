//React Dom
//layout
import Header from "./Layout/Header/Header";
import NavBar from "./Layout/NavBar/NavBar";
import Footer from "./Layout/Footer/Footer";
//Components
import CardProduct from "./Components/Card/Card.jsx";
//Pages
import Home from "./Pages/Home/Home";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import Login from "./Pages/Login/Login";
import CounterCountainer from "./Components/Counter/CounterCountainer";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Home />

      <CardProduct />
      <Login />
      <ItemListContainer />
      <CounterCountainer stock={20} />
      <Footer />
    </>
  );
}

export default App;
