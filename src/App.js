import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Likes from "./views/Likes";
import "./index.scss";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Likes />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
