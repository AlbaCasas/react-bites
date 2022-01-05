import { BrowserRouter, Routes, Route } from "react-router-dom";
import Likes from "./views/Likes";
import Home from "./views/Home";
import Layout from "./components/Layout/Layout";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
