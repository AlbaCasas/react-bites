import { BrowserRouter, Routes, Route } from "react-router-dom";
import Likes from "./pages/challenges/Likes";
import Sum from "./pages/challenges/Sum";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/likes"
          element={
            <Layout>
              <Likes />
            </Layout>
          }
        />
        <Route
          path="/sum"
          element={
            <Layout>
              <Sum />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
