import { BrowserRouter, Routes, Route } from "react-router-dom";
import Likes from "./views/Likes";
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
              <Likes />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
