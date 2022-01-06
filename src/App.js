import { BrowserRouter, Routes, Route } from "react-router-dom";
import Likes from "./challenges/Likes";
import Home from "./home/Home";
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/likes" element={<Likes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
