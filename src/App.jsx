//React Dom
//layout
import Header from "./Layout/Header/Header";
import NavBar from "./Layout/NavBar/NavBar";
import Footer from "./Layout/Footer/Footer";
//Components

//Pages
import Home from "./Pages/Home/Home";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import Login from "./Pages/Login/Login";
import CounterCountainer from "./Components/Counter/CounterCountainer";
import FetchingData from "./Pages/FechingData/FetchingData";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Home />

      <Login />
      <ItemListContainer />
      <CounterCountainer stock={20} />

      <FetchingData />
      <Footer />
    </>
  );
}

export default App;
