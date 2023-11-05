//React Dom
import { BrowserRouter } from "react-router-dom";
//layout
import Header from "./Layout/Header/Header";
import AppRouter from "./router/AppRouter";

import { ThemeProvider } from "@emotion/react";
import customTheme from "./themeConfig";
import CartContextComponent from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <ThemeProvider theme={customTheme}>
          <Header />
          <AppRouter />
        </ThemeProvider>
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
