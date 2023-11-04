//React Dom
import { BrowserRouter } from "react-router-dom";
//layout
import Header from "./Layout/Header/Header";
import AppRouter from "./router/AppRouter";

import { ThemeProvider } from "@emotion/react";
import customTheme from "./themeConfig";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <Header />
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
