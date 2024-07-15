import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TripDetailPage from "./pages/TripDetailPage";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/trip/:id" element={<TripDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
