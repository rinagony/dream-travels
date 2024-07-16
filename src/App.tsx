import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
